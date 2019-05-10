'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const ExistsWebpackPlugin = require('exists-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const FlowWebpackPlugin = require('flow-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const paths = require('./paths');
const { name } = require('../package');

// -----------------------------Rules-------------------------------------------
const rules = [{
  oneOf: [
    // Skipp all CSS/Sass files
    {
      test: [/\.css$/, /\.scss$/],
      use: 'null-loader',
    },
    // JS files from "src"
    {
      test: /\.jsx?$/,
      include: paths.src,
      use: [
        'babel-loader',
        {
          loader: 'eslint-loader',
          options: {
            emitWarning: false,
            failOnError: true,
          },
        },
      ],
    },
    // Fallback to the "file" loader for all unmatched modules
    {
      exclude: [/\.jsx?$/, /\.html$/, /\.json$/], // fixing conflicts with other loaders
      use: {
        loader: 'file-loader',
        options: {
          context: paths.src,
          name: paths.output.assets,
        },
      },
    },
    // No more loaders after file-loader
  ],
}];

// ----------------------------Plugins------------------------------------------
const plugins = [
  new ExistsWebpackPlugin({
    mode: 'entries',
  }),
  new HtmlWebpackPlugin({
    inject: true,
    template: paths.indexHtml,
    // You can minify html
  }),
  new HtmlWebpackIncludeAssetsPlugin({
    assets: paths.injectAssets,
    append: false,
  }),
  new DotenvWebpackPlugin({
    path: paths.env,
    safe: paths.envRef,
    systemvars: false,
  }),
  new StyleLintPlugin({
    context: paths.src,
    emitErrors: true,
    failOnError: true,
    files: paths.stylelintPattern,
  }),
  new FlowWebpackPlugin({
    failOnError: true,
  }),
  new webpack.IgnorePlugin(/^\.\/locale$/, /\/moment$/),
  new webpack.IgnorePlugin(/^\.\/languages$/, /\/numbro$/),
  new CompressionPlugin({
    threshold: 512,
    minRatio: 0.88,
  }),
];

// ------------------------- Production config ---------------------------------
module.exports = merge(commonConfig, {
  mode: 'production',
  entry: {
    [name]: paths.mainJs,
  },
  bail: true,
  devtool: false,
  output: {
    publicPath: `${paths.rootUrl}${paths.urlPath}/`,
    filename: paths.output.js,
    chunkFilename: paths.output.jsChunks,
  },
  module: {
    rules,
  },
  plugins,
  optimization: {
    noEmitOnErrors: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: false,
        terserOptions: {
          mangle: {
            safari10: true,
          },
          output: {
            ascii_only: true,
            comments: false,
          },
          compress: {
            comparisons: false,
          },
        },
      }),
    ],
  },
  recordsPath: paths.records,
  stats: {
    modules: false,
  },
});

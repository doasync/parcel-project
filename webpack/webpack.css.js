'use strict';

const ExistsWebpackPlugin = require('exists-webpack-plugin');
const DelWebpackPlugin = require('del-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const postcssLoader = require('./postcss-loader');

const paths = require('./paths');

// -----------------------------Rules-------------------------------------------
const rules = [{
  oneOf: [
    // CSS files
    {
      test: [/\.css$/, /\.scss$/],
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: true,
          },
        },
        postcssLoader,
      ],
    },
    // JS files from "src"
    {
      test: /\.js$/,
      include: paths.src,
      use: 'babel-loader',
    },
    // Fallback to the assets loader for all unmatched modules
    {
      exclude: [/\.js$/, /\.html$/, /\.json$/], // fixing conflicts with other loaders
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
    mode: 'assets',
  }),
  new DelWebpackPlugin({ include: ['.temp'], info: false }),
  new MiniCssExtractPlugin({
    filename: paths.output.css,
    chunkFilename: paths.output.cssChunks,
  }),
  new CompressionPlugin({
    threshold: 512,
    minRatio: 0.88,
  }),
];

// ------------------------- Production config ---------------------------------
module.exports = merge(commonConfig, {
  mode: 'production',
  bail: true,
  devtool: false,
  entry: {
    main: paths.mainJs,
  },
  output: {
    publicPath: `${paths.rootUrl}${paths.urlPath}/`,
    filename: '.temp/[chunkhash:10]',
    chunkFilename: '.temp/[chunkhash:10]',
  },
  module: {
    rules,
  },
  plugins,
  optimization: {
    noEmitOnErrors: true,
    minimize: true,
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  stats: {
    modules: false,
    children: false,
    excludeAssets: /^\.temp\//,
  },
});

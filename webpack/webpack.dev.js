'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');
// eslint-disable-next-line no-unused-vars
const FlowWebpackPlugin = require('flow-webpack-plugin');

const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const postcssLoader = require('./postcss-loader');

const paths = require('./paths');

// -----------------------------Rules-------------------------------------------
const rules = [{
  oneOf: [
    // JS files from "src"
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            // cacheDirectory: true // WARNING: can cause babel-loader errors
          },
        },
        {
          loader: 'eslint-loader',
          options: {
            cache: true,
            emitWarning: true,
          },
        },
      ],
    },
    // CSS files (all)
    {
      test: [/\.css$/, /\.scss$/],
      use: [
        'style-loader',
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            sourceMap: true,
            import: false,
          },
        },
        postcssLoader,
      ],
    },
    // Fallback to the "file" loader for all unmatched modules
    {
      exclude: [/\.jsx?$/, /\.html$/, /\.json$/],
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
  new HtmlWebpackPlugin({
    inject: true,
    template: paths.indexHtml,
  }),
  new DotenvWebpackPlugin({
    path: paths.env,
    safe: paths.envRef,
    systemvars: false,
  }),
  new StyleLintPlugin({
    files: paths.stylelintPattern,
  }),
  new FlowWebpackPlugin({
    failOnError: false,
    reportingSeverity: 'warning',
  }),
  new webpack.IgnorePlugin(/^\.\/locale$/, /\/moment$/),
  new webpack.IgnorePlugin(/^\.\/languages$/, /\/numbro$/),
  new webpack.HotModuleReplacementPlugin(),
];

// -------------------------- Development config -------------------------------
module.exports = merge(commonConfig, {
  mode: 'development',
  entry: {
    main: paths.mainJs,
  },
  output: {
    publicPath: '/',
    pathinfo: true,
    filename: paths.output.devJs,
    chunkFilename: paths.output.devJsChunks,
  },
  module: {
    // noParse: function... <- Skip parsing (if no import, require, define)
    rules,
  },
  plugins,
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    contentBase: paths.dist,
    publicPath: '/',
    open: false,
    compress: true,
    clientLogLevel: 'error',
    historyApiFallback: {
      disableDotRule: true,
    },
    host: 'localhost',
    port: 8000,
  },
  optimization: {
    concatenateModules: false,
    minimize: false,
    runtimeChunk: true,
  },
});

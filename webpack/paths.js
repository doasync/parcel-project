'use strict';

require('dotenv').config();

const fs = require('fs');

const { version } = require('../package');

// eslint-disable-next-line security/detect-non-literal-fs-filename
const root = fs.realpathSync(`${__dirname}/..`); // resolve any symlinks etc.

const rootUrl = '';
const urlPath = `/build/${version}`;

const src = `${root}/src`;
const dist = `${root}/dist${urlPath}`;

const webpack = `${root}/webpack`;
const modules = `${root}/node_modules`;
const appModules = `${root}/packages`;

const mainJs = `${src}/entry.js`;
const indexHtml = `${src}/index.html`;

const stylelintPattern = '+(**/*.css|**/*.scss|**/*.js|**/*.html)';
const packageJson = `${root}/package.json`;
const env = `${root}/.env`;
const envRef = `${root}/.env.ref`;

const records = `${webpack}/info/records.json`;
const webpackStats = `${webpack}/info/webpack-stats.json`;

const cssAssetsDirs = [];
const injectAssets = [];

const output = {
  css: 'css/[name].css',
  cssChunks: 'css/[id].css',
  assets: '[path][name].[ext]',
  js: 'js/[name].js',
  jsChunks: 'js/[name].js',
  devJs: 'js/[name].js',
  devJsChunks: 'js/[name].js',
};

module.exports = {
  rootUrl,
  urlPath,
  root,
  modules,
  appModules,
  src,
  dist,
  mainJs,
  indexHtml,
  packageJson,
  output,
  records,
  webpackStats,
  env,
  envRef,
  stylelintPattern,
  cssAssetsDirs,
  injectAssets,
};

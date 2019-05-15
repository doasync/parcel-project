
const path = require('path');

const normalize = require('postcss-normalize');
const easyImport = require('postcss-easy-import');
const nested = require('postcss-nested');
const advancedVariables = require('postcss-advanced-variables');
const flexFixes = require('postcss-flexbugs-fixes');
const presetEnv = require('postcss-preset-env');
const cssUrl = require('postcss-url');

const paths = require('./paths');

const urlResolver = ({ url }, { from, file }) => {
  const pattern = /^~\//;
  const slash = urlPath => urlPath.replace('\\', '/');
  const relativePath = slash(path.relative(from, paths.src));

  if (pattern.test(url)) {
    const assetPath = url.replace(pattern, '/');
    return `${relativePath}${assetPath}`;
  }

  return slash(path.relative(from, path.join(file, url)));
};

module.exports = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    parser: 'postcss-scss',
    plugins: [
      easyImport({ prefix: '_', extensions: ['.css', '.scss'] }),
      nested(),
      advancedVariables(),
      cssUrl({ url: urlResolver }),
      presetEnv({
        stage: 2,
        autoprefixer: {
          flexbox: 'no-2009',
          grid: true,
        },
      }),
      flexFixes(),
      normalize(),
    ],
  },
};

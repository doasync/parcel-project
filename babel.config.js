const alias = {
  '~': './src',
};

module.exports = {
  // prettier-ignore
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-flow'
  ],
  plugins: [
    ['babel-plugin-styled-components', { pure: true }],
    ['module-resolver', { alias }],
    '@babel/plugin-syntax-dynamic-import',
    'react-hot-loader/babel',
  ],
};

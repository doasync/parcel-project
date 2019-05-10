const alias = {
  '~': './src',
};

module.exports = {
  presets: [
    // Parcel 1 doesn't respect browserlist (bug)
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-flow',
  ],
  plugins: [
    ['module-resolver', { alias }],
    '@babel/plugin-syntax-dynamic-import',
    'react-hot-loader/babel',
  ],
};

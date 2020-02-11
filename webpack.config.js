const path = require('path');

module.exports = {
  mode: 'production',
  devtool: false,
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '/dist'),
    // library: COMPONENT_NAME,
    libraryTarget: 'commonjs',
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: require.resolve('babel-loader'),
        include: path.join(__dirname, '/src'),
        options: {
          babelrc: false,
          presets: [
            require.resolve('@babel/preset-react'),
            [require.resolve('@babel/preset-env'), { modules: false }],
          ],
          plugins: [
            require.resolve('@babel/plugin-proposal-object-rest-spread'),
            require.resolve('@babel/plugin-proposal-class-properties'),
            [
              require.resolve('babel-plugin-transform-react-remove-prop-types'),
              { removeImport: true },
            ],
          ],
        },
      },
    ],
  },
  // resolve,
  // stats,
  // externals
};

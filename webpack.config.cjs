const path = require('path')

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: './index.ts',
  },
  mode: 'development',
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.tsx?$/,
      },
    ],
  },
  output: {
    filename: '[name].make.js', // <--- Will be compiled to this single file
    path: path.resolve(__dirname, './host'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
}

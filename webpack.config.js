const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: path.resolve(__dirname, 'client/src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'client/src'),
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public/'),
    proxy: {
      '/*': {
        target: 'http://localhost:3030/',
        secure: false
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
}

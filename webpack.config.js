const path = require('path')

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'client/src/app.js')
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
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
      '/books/': {
        target: 'http://localhost:3030/',
        secure: false
      }
    }
  }
}

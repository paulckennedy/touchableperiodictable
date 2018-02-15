module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
 module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
   devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};

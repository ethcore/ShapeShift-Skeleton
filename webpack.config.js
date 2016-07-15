var webpack = require("webpack"),
    WebpackErrorNotificationPlugin = require('webpack-error-notification'),
    path = require("path")

module.exports = {
  context: path.join(__dirname, "./src"),
  entry: {
    index: "./entry.js"
  },
  output: {
    path: path.join(__dirname, "./build"),
    filename: "bundle.js"
  },
  resolve:{
    extensions: ["", ".js", ".elm"]
  },
  resolveLoader: { root: path.join(__dirname, 'node_modules') },
  devServer: {
    hot: true,
    contentBase: "./build",
    inline: true,
    progress: true
  },
  module: {
    loaders: [
      { test: /\.js$|.jsx$/, exclude: /node_modules/, loader:  'babel' },
      { test:    /\.elm$/, exclude: [/elm-stuff/, /node_modules/], loader:  'elm-webpack' },
      { test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader : 'file-loader' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.scss$/, loaders: ["style", "css", "sass"] },
      { test: /\.html$/, loader: 'file?name=[name].[ext]' }
    ]
  },
  plugins: [
    new WebpackErrorNotificationPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
}

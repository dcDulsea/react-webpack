const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      title: "使用Webpack搭建react环境"
    }),
    new ExtractTextPlugin("css/style.css")
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader"]
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.less$/,
        include: path.join(__dirname, '/node_modules/antd'),
        use: [{
          loader: 'style-loader',
        },{
          loader: 'css-loader',
        },{
          loader: 'less-loader',
          options: {
            modifyVars: {
              'primary-color': '#1da57a'
            },
            javascriptEnable: true,
          }
        }]
      }
    ]
  },
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, 'dist')
  }
}
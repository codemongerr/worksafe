const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");


const dirNode = 'node_modules';
const dirSrc = path.join(__dirname, 'src');
const dirPublic = path.join(__dirname, 'public');
const dirDist = path.join(__dirname, 'dist');
const dirAssets = path.join(__dirname, 'assets');

module.exports = {
  entry: `${dirSrc}/index.js`,
  output: {
    path: path.resolve(dirDist),
    filename: 'index.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }, 
  module: {
    rules: [
      // BABEL Loader
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          compact: true,
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      // IMAGES
      {
        test: /\.(jpe?g|png|gif|ico)$/,
        loader: 'file-loader',
        options: {
          name: 'graphics/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: `${dirPublic}/index.html`,
      filename: "index.html",
      inject: "body"
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    watchContentBase: true,
    compress: true,
    port: 8896,
    stats: "errors-only",
    open: true,
    inline: true,
    hot: true,
    historyApiFallback: true
  },
  mode: 'development'
};
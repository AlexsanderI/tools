const HtmlWebpackPlugin = require('html-webpack-plugin'); // создает html фаил и автоматически подключает js файлы к html
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //подлючает css фаил к html
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // удоляет папку dist и ее садержимое
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: ['babel-loader'],
      },
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /.(jpg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(), // удоляет папку dist и ее садержимое

    new HtmlWebpackPlugin({
      template: './src/index.html', // создает html фаил и автоматически подключает js файлы к html
    }),
    new MiniCssExtractPlugin({
      //подлючает css фаил к html
      filename: '[name].css',
    }),
  ],
};

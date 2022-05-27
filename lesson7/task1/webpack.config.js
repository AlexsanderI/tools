const HtmlWebpackPlugin = require('html-webpack-plugin'); // создает html фаил и автоматически подключает js файлы к html
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //подлючает css фаил к html

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.s?css$/, // ? воспринимает файлы css и scss
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /.(jpg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[path][name].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // создает html фаил и автоматически подключает js файлы к html
    }),
    new MiniCssExtractPlugin({
      //подлючает css фаил к html
      filename: '[name].css',
    }),
  ],
};

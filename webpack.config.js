const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
  mode: 'development',
   entry: {
     index: './src/index.js',
   },
   devtool: 'inline-source-map',
   devServer: {
     static: './dist',
   },
   module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
     ],
   },
   plugins: [
     new HtmlWebpackPlugin({
      inject: false,
      template: './dist/index.html',
      title: 'Output Management',
      title: 'Development',
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   optimization: {
     runtimeChunk: 'single',
   },
 };
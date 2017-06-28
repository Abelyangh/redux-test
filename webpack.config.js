const webpack = require('webpack');
const path = require('path');

const  BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'app');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  filename: 'index.html',
  inject: 'body',
});

const config = {
	entry: APP_DIR + '/index.js',
	output: {
		path: BUILD_DIR,
		filename: 'index_bundle.js'
	},
	module: {
		/*rules: [
          {
          	test: /\.html$/,
          	use: [
              loader: 'html-loader',
              options: {
              	minimize: true
              }

          	]
          }
		]，*/
    rules: [/*{
      test: /\.jsx$|\.js$/,
      loader: 'eslint-loader',
      include: `${__dirname}/app`,
      exclude: /bundle\.js$/
    },*/
    {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react']
            }
    }],
	},
  devServer: {
    inline: true,
    port: 8000,
  },
  plugins: [
    htmlWebpackPluginConfig
  ],

}

module.exports = config;
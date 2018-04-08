const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
  },
  entry: {
    'ac-grid': './src/index.js',
  },
  externals: {
    angular: 'angular'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['minify', { removeUndefined: false }]
            ]
          }
        }
      },
      {
        test: /^(?!.*style-loader\/useable!).*\.(sass|scss|css)$/i,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader'}
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'ngtemplate-loader', options: 'requireAngular&module=ac-grid&relativeTo=' + path.resolve(__dirname, './src/templates') },
          { loader: 'html-loader' }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: '[name].css' }),
  ]
};

export {};
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const ENV = process.env.NODE_ENV || 'development';

module.exports = {
  target: 'web',
  entry: {
    app: ['./src'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new LodashModuleReplacementPlugin({ shorthands: true }),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new MomentLocalesPlugin({ localesToKeep: ['en'] }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV),
    }),
  ],
};

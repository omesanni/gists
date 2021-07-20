export {};
const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

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
    new Dotenv({ path: './.env', systemvars: true }),
  ],
};

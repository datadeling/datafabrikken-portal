import type { Configuration } from 'webpack';
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const configuration: Configuration = {
  entry: {
    main: './src/entrypoints/main/index.tsx',
    auth: './src/entrypoints/auth/index.ts'
  },
  output: {
    path: resolve(__dirname, '../dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
    publicPath: '/',
    clean: true
  },
  resolve: {
    alias: {
      'react/jsx-runtime.js': 'react/jsx-runtime',
      'react/jsx-dev-runtime.js': 'react/jsx-dev-runtime'
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: resolve(__dirname, '../babel.config.js')
            }
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: resolve(__dirname, '../tsconfig.json')
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /^(?!.*\.inline\.svg$).*\.svg$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },
      {
        test: /\.inline.svg$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true
            }
          }
        ],
        include: [resolve(__dirname, '..', 'src', 'images')]
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        exclude: [resolve(__dirname, '..', 'src', 'images')]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/entrypoints/main/index.html',
      filename: 'index.html',
      favicon: './src/images/favicon.ico',
      base: '/',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: './src/entrypoints/auth/index.html',
      filename: 'auth.html',
      favicon: './src/images/favicon.ico',
      base: '/',
      chunks: ['auth']
    })
  ]
};

export default configuration;

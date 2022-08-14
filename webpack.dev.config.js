const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.global\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.component\.html$/,
                use: [
                    {
                        loader: 'raw-loader',
                        options: {
                        esModule: false
                        }
                    }
                ]
            },
            {
                test: /\.component\.css$/,
                use: [
                    {
                        loader: 'raw-loader',
                        options: {
                        esModule: false
                        }
                    }
                ]
            },
            {
                test: /bg\.png$/,
                use: [
                    {
                        loader: 'raw-loader',
                        options: {
                        esModule: false
                        }
                    }
                ]
            }
        ]
    }
}
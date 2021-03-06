const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        path: path.resolve(__dirname, 'src', 'index.jsx'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src', 'components'),
            reducers: path.resolve(__dirname, 'src', 'reducers'),
            actions: path.resolve(__dirname, 'src', 'actions'),
            containers: path.resolve(__dirname, 'src', 'containers'),
            middlewares: path.resolve(__dirname, 'src', 'middlewares'),
        }
    },
    devtool: 'eval-cheap-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                    {loader: "css-loader"}
                ],
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: "index.html",
            minify: false,
            inject: "body",
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css',
        }),
    ],
    devServer: {
        historyApiFallback: true,
    }
};
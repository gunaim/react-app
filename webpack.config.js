var path = require('path');
var hwp = require('html-webpack-plugin');
// var miniCssExtractPlugin = require("mini-css-extract-plugin");
var webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundlerr.js"
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader','sass-loader'],
            }
        ]
    },
    plugins: [
        new hwp({
            filename: "index.html",
            template: path.join(__dirname, "src", "index.html")
        })
        // new miniCssExtractPlugin({
        //     filename: "[name].css",
        //     chunkFilename: "[id].css"
        // })
    ]
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src/index.js"),
    devServer: {
        static: {
            directory: path.resolve(__dirname, "public"),
        },
        port: 3030,
        open: true, // start hoyer satthe dathe browser e live
        hot: true, //  auto reload
        compress: true,
        historyApiFallback: true,
    },
    output: {
        path: path.resolve(__dirname, "bundle"),
        filename: "bundle.js",
        assetModuleFilename: "[name][ext]",  //for img
        clean: true, // new build replace code
    },
    module: {
        rules: [
            {
                //   js loader
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                //css loader
                test: /(\.css|\.scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                // img loader
                test: /\.(jpg|jpeg|svg|png|webp)$/i,
                type: 'asset/resource'  //looking this file
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "ES6 env setup",
            filename: "index.html",
            template: "public/index.html", // ke bundle e index.html e convert
        }),
    ],
};

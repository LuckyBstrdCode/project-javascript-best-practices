const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
 
module.exports = {
    mode: "development",
    entry: {
        index:"./src/js/index.js"
    },
    
    output: {
      filename: "[name].bundle.js",
      library: "dist",
    },
    devServer : {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [{
            test:/\.ts$/,
            use: {
                loader:'ts-loader',
                },
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use:['style-loader','css-loader']
        },
        {
            test: /\.scss$/,
            use:['style-loader','css-loader','sass-loader']
        },
        {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader:'url-loader?limit=100000'
        }]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'common',
                    chunks: 'all'
                }
            }
        }
    },
    plugins : [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            title: 'login'
        }),
        new HtmlWebpackPlugin({
            filename: 'nosotros.html',
            template: 'src/nosotros.html',
            title: 'nosotros'
        })
    ]
  };

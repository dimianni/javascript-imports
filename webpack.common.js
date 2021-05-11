const path = require('path');

// https://webpack.js.org/plugins/html-webpack-plugin/
const HtmlWebpackPlugin = require('html-webpack-plugin');

// https://webpack.js.org/plugins/mini-css-extract-plugin/
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// https://webpack.js.org/plugins/css-minimizer-webpack-plugin/#minify
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: 'js/[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // https://webpack.js.org/guides/asset-modules/
        // Doesn't put hashes and exports to images folder 
        assetModuleFilename: 'images/[name][ext]',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // Places js at the end of body tag
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            // changing output directory to 'css' folder
            filename: 'css/[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    // This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.
                    MiniCssExtractPlugin.loader,
                    // Reads CSS imports in JS files. Interprets @import and url() like import/require() and resolves them.
                    'css-loader',
                    // Loads a Sass/SCSS file and compiles it to CSS.
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg)$/i,
                type: 'asset/resource'
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
        // Creates a vendors file (code is not duplicated)
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'all',
                    name: 'vendors'
                }
            }
        },
    }
}
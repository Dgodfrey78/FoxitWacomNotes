var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var env = process.NODE_ENV;

var distPath = path.resolve(__dirname, 'dist');
var libPath = path.resolve(__dirname, './node_modules/UIExtension');

module.exports = {
    mode: env,
    entry: {
        lib:[libPath+'/UIExtension.full.js'],
        index: ['./src/index.js']
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: distPath,
        port: 9999,
        hot: true,
        inline: true,
        host: '0.0.0.0',
        disableHostCheck: true,
        clientLogLevel: 'error'
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader: ['style-loader', 'css-loader'],
            exclude: /node_modules/
        },
        {
            test: /addon\.info\.json$/,
            use: '@foxitsoftware/addon-loader',
            type: 'javascript/auto'
        },{
            test: /\.art$/,
            loader: "art-template-loader",}
        ]
    },
    externals: ['UIExtension', 'PDFViewCtrl'],
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./index.html'),
            chunks:["lib","index"]
        }),
        new CopyWebpackPlugin([
            {
                from: libPath,
                to: path.resolve(distPath, 'lib'),
                force: true
            },
            {
                from: path.resolve(__dirname, '../../../docs/FoxitPDFSDKforWeb_DemoGuide.pdf'),
                to: path.resolve(distPath, 'docs'),
                force: true,
                toType: 'dir'
            },
            {
                from: path.resolve(__dirname, '../../../external'),
                to: path.resolve(distPath, 'external'),
                force: true
            }
        ]),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].js',
        path: distPath
    }
};
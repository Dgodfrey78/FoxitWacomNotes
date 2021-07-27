const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

require('webpack')

module.exports = {
    chainWebpack: 
    /**
     * @param {chainWebpack} config
     */
    function(config) {
        config
            .entry('adaptive')
            .add(path.resolve('src/foxit-lib/adaptive.js'))
            .end()
            .entry("preload")
            .add(path.resolve("src/preload.js"))
            .end()
            .plugin("html")
            .tap(args => {
                const [options,] = args;
                options.chunks = ["adaptive", "preload", "chunk-vendors", "app"];
                options.chunksSortMode = 'manual';
                return args;
            })
            .end()
            .module.rule("js")
            .exclude.add(/node_modules|foxit-lib|license\-key\.js/);

            config.module
            .rule("eslint")
            .exclude.add(/node_modules|foxit-lib|license\-key\.js/);

            config.module
            .rule('addon')
            .type('javascript/auto')
            .include.add(/foxit-lib/)
            .end()
            .test(/\addon\.info\.json$/)
            .use('babel')
                .loader('babel-loader')
                .options({
                    "presets": ["@babel/env"]
                })
                .end()
            .use('addon-loader')
                .loader('@foxitsoftware/addon-loader')
                .end()
        config.externals(['UIExtension', 'PDFViewCtrl'])
    },
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin([
                {
                    from: "src/foxit-lib/",
                    to: "foxit-lib",
                    force: true,
                    ignore: [
                        "{PDFViewCtrl,UIExtension}*.{js,css}",
                        "preload-jr-worker.js"
                    ]
                }
            ])
        ]
    },
    devServer: {
        disableHostCheck: true,
        port: 9103
    }
};

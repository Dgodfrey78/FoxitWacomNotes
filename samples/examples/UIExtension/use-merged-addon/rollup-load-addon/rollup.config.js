const path = require('path');
const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');
const serve = require('rollup-plugin-serve');
const html = require('rollup-plugin-html2');
const copy = require('rollup-plugin-copy');
const buble = require('rollup-plugin-buble');

const libPath = '../../../../lib/';
const UIExtensionPath = libPath + 'UIExtension.full.js';
const licenseKeyPath = path.resolve(__dirname, '../../../license-key.js');

module.exports = {
    input: 'src/index.js',
    output: {
        dir: 'dist',
        format: 'iife',
        sourcemap: 'inline'
    },
    plugins: [
        buble({
            exclude: ['node_modules/**', libPath + '**'],
            include: 'src/**'
        }),
        nodeResolve(),
        commonjs({
            include: ['node_modules/**', libPath + "**", './dist/merged-addons.js', licenseKeyPath],
            sourceMap: true,
            namedExports: {
                [licenseKeyPath]: ['licenseKey', 'licenseSN'],
                [UIExtensionPath]: ["PDFViewCtrl"]
            }
        }),
        html({
            template: 'src/index.html'
        }),
        copy({
            targets: [{
                src: libPath,
                dest: 'dist/'
            },{
                src: '../../../../external',
                dest: 'dist/'
            }, {
                src: '../../../../docs',
                dest: 'dist/'
            }]
        }),
        serve({
            port: 9992,
            contentBase: 'dist'
        })
    ]
};

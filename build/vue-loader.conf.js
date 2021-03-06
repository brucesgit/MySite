'use strict'
const merge = require('webpack-merge')
const utils = require('./utils')
const config = require('../config')
const postcssConfig = require('./postcss.config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction ?
    config.build.productionSourceMap :
    config.dev.cssSourceMap

module.exports = {
    loaders: merge(
        utils.cssLoaders({
            sourceMap: sourceMapEnabled,
            extract: isProduction
        }), {
            ts: ['ts-loader', 'tslint-loader']
        }
    ),
    cssSourceMap: sourceMapEnabled,
    cacheBusting: config.dev.cacheBusting,
    transformToRequire: {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    },
    // vue-loader options go here
    postcss: postcssConfig
}
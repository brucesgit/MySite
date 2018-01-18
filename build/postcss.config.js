const packageConfig = require('../package.json')

module.exports = {
    plugins: [
        require('postcss-import')(),
        require('autoprefixer')({
            browsers: packageConfig.browserslist
        })
    ]
}
const path = require('path')

const distDir = './public'
const distPath = path.resolve(__dirname, distDir)

module.exports = {
    entry: './src/index.js',
    output: {
        path: distPath,
        filename: 'app.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /\/node_modules\//,
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    devServer: {
      contentBase: distPath,
    },
}


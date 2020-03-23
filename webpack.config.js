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
        }, {
            test: /\.(scss)$/,
            use: [{
                loader: 'style-loader', // inject CSS to page
            }, {
                loader: 'css-loader', // translates CSS into CommonJS modules
            }, {
                loader: 'postcss-loader',
                options: {
                    plugins: function () { // postcss plugins, can be exported to postcss.config.js
                        return [
                            require('autoprefixer')
                        ]
                    }
                }
            }, {
                loader: 'sass-loader' // compiles Sass to CSS
            }]
        }, ]
    },
    devServer: {
        contentBase: distPath,
    },
}
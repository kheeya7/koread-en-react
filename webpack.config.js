module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist', publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: { contentBase: './dist', },

    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Less to CSS
                    'less-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }
};
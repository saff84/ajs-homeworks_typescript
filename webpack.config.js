module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                }
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    // plugins:[
    //     new HtmlWebpackPlugin({
    //         template: "./src/index.html"
    //     }),
    //     new MiniCSSExtractPlugin()

    // ]
}
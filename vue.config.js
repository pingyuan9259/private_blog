const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    configureWebpack: {
        entry: {
            app: './src/index.ts',
        },
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
            },
        },
        module: {
            rules: [
                {
                    test: /\.html$/,
                    include: path.resolve(__dirname, 'src'),
                    use: 'html-loader'
                }
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src/index.html'),
                favicon: path.resolve(__dirname, 'public/classify_left.png'),
                hash: true
            }),
        ],
    },
}

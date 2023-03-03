const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: {
        index: './src/index.js'
    },
    mode: 'production',
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },{
            test: /\.js$/,
            use: ['babel-loader']
          }
        ],
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].min.js"
    }, 
}
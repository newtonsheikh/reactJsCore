var path = require('path');
var webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
    entry: './ClientApp/App.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    output: {
        filename: 'bundle.js',
        
        publicPath: '/'
    },

    module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
          }
        ]
      },
      plugins: [
          new CheckerPlugin()
      ]
}
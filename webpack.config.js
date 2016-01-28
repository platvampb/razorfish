var webpack = require('webpack');  
module.exports = {  
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      "./app/js/app.js"
    ],
    output: {
        path: './build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['es2015', 'react']}},
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    devServer: {
        contentBase: "./build",
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};

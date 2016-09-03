var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8080',
		'webpack/hot/only-dev-server',
		'./app/app.js'
	],
	output: {
		path: './build',
		filename: "bundle.js"
	},
	devtool: 'eval-source-map',
	resolve: {
			extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{ test: /\.jsx|\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
			{ test: /\.jsx|\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['react']}},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('style-loader', 'css!sass?outputStyle=expanded')
			},
		]
	},
	devServer: {
		contentBase: "./build",
	},
	plugins: [
		new ExtractTextPlugin('app.css'),
		devFlagPlugin,
		new webpack.NoErrorsPlugin()
	]

};

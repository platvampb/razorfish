const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
	entry: {
		app: './app/app.js'
	},
	output: {
		path: './build',
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	resolve: {
			extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{ test: /\.jsx|\.js?$/, loader: 'babel', exclude: /node_modules/},
			{ test: /\.jsx|\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['react']}},
			{
				test: /\.css$/,
				include: /stylesheets/,
				loader: 'style!css?outputStyle=expanded'
			},
			{
				test: /\.scss$/,
				include: /stylesheets/,
				loader: ExtractTextPlugin.extract('style-loader', 'css!sass?outputStyle=expanded')
			},
			{
				test: /\.(jpg|png|gif|eot|woff|ttf|svg)/,
				loader: "file"
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('[name].css'),
		devFlagPlugin
	]

};

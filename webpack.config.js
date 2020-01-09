const {VueLoaderPlugin} = require('vue-loader');
const config = require('./config');

module.exports = {
	mode: 'development', // prod mode when deploying apparently does good things
	entry: './frontend/main.js',
	output: {
		path: config.publicDir,
		filename: 'bundle.js',
	},
	resolve: {
		extensions: [
			'.js',
			'.vue',
		],
	},
	target: 'web',
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader',
				],
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							data: `
								@import "frontend/styles/main";
							`,
						},
					},
				],
			},
			{
				test: /\.js$/,
				use: [
					'babel-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'url-loader',
				],
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
	],
};

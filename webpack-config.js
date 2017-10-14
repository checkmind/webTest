const webpack = require('webpack');
module.exports = {
	devtool : 'eval-source-map',
	entry : __dirname + '/app/main.js',
	output : {
		path : __dirname + '/build',
		filename : 'bundle.js'
	},
	devServer : {
		contentBase : "./public",
		historyApiFallback : true,
		inline : true
	}
	module : {
		loaders : [{
			test : /\.css$/,
			use : [{
				loader : "style-loader"
			},{
				loader : "css-loader"
			}]
		}],
	}
}
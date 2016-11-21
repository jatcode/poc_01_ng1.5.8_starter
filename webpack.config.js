
module.exports = {
	entry: "./src/app/pb.js",
	output:{
		path: __dirname,
		filename: "bundle.js"
	},
	module:{
		loaders:[
			{ test: /\.js$/, exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader', query: { presets: ['es2015'] }
			},
			{ test: /\.html$/, loader: 'raw' },
			{ test: /\.css$/, loader: "style!css" }
		]
	}
};
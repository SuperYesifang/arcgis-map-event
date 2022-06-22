const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "production",
	entry: {
		cdn: "./src/index.cdn.js"
	},
	output: {
		path: __dirname + "/dist",
		filename: "arcgis-map-event.cdn.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							["@babel/preset-env", {
								"useBuiltIns": "usage"
							}]
						]
					}
				}
			}
		]
	},
	devServer: {
		static: {
			directory: __dirname + "/dist",
			publicPath: "/dist"
		},
		host: "localhost",
		port: 9001,
		compress: true,
		open: true,
		hot: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			hash: false,
			minify: false,
			inject: false
		})
	]
}
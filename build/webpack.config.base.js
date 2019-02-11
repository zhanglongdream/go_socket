const path = require('path');


module.exports = {
	entry: path.resolve(__dirname, "../client/app.js"),
	output: {
		filename: "[name].[hash:8].js",
		path: path.resolve(__dirname, "../dist")
	},
  resolve: {
    extensions: [".js", ".jsx"]
  },
	module: {
		rules: [
      {
      	test: /\.js$/,
      	loader: "babel-loader",
      	exclude: [
          path.resolve(__dirname, "../node_modules/")
      	]
      },
      {
      	test: /\.jsx$/,
      	loader: "babel-loader",
      	exclude: [
          path.resolve(__dirname, "../node_modules/")
      	]
      }
		]
	}
}

const path = require("path")
const merge = require("webpack-merge")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const base = require("./webpack.config.base.js")

const DEV = process.env.NODE_ENV === 'development'
const plugins = [
  new HTMLWebpackPlugin({
    template: path.resolve(__dirname, "../client/index.html")
  })
]
let Config

if (DEV) {
  Config = merge(base, {
    mode: "development",
    devServer: {
      port: 8888,
      host: "0.0.0.0",
      contentBase: path.join(__dirname, "../dist"),
      historyApiFallback: {
        index: "/"
      }
    },
    plugins: plugins
  })
} else {
  Config = merge(base, {
    mode: "production",
    plugins: plugins
  })
}


module.exports = Config;

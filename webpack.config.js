const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "pages", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: bundle.js,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        // use babel-loader for transpiling
        options: {
          // attach the presets to the loader
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  // add a custom index.html as the template
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
};

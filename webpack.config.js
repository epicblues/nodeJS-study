const path = require("path");

module.exports = {
  mode: "development",

  devtool: "eval",
  resolve: {
    extensions: [".js", ".css"],
  },
  entry: {
    app: ["./Graph"],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

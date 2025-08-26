const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/cine-mate/",
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@services": path.resolve(__dirname, "src/services/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@constants": path.resolve(__dirname, "src/constants/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            targets: [">1%", "not dead"],
            presets: [["@babel/preset-env"]],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][hash][ext]",
        },
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "main[contenthash].css",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9001,
    hot: true,
  },
};

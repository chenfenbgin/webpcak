const path = require("path");
// 插件需要手动导入
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");

module.exports = {
  // 设置模式
  // development 开发阶段，设置
  // production 准备打包上线的时候，设置
  mode: "development",
  // 设置source-map,建立js映射文件，在开发的时候方便调试和代码错误
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js",
    // asset module 打包的名字也可以写在这里
    assetModuleFilename: "img/[name]-[hash:6][ext]",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/,
        // type: "asset/resource"
        // 最常用的是根据asset， 要不要单独转成一个文件
        type: "asset",
        generator: {
          filename: "img/[name]-[hash:6][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },

      // file-loader
      // {
      //   test: /\.(png|gif|svg)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       // outputPath: 'img', //可以放到name属性中
      //       name: "img/[name]-[hash:6].[ext]"
      //     }
      //   }
      // },

      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   use: {
      //     loader: "url-loader",
      //     options: {
      //       name: "img/[name]-[hash:6].[ext]",
      //       // 小于100kb的图片才会做base64的编码
      //       limit: 100 * 1024
      //     }
      //   }
      // },

      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       name: "img/[name]-[hash:6].[ext]"
      //     }
      //   }
      // },

      // {
      //   test: /\.(eot|ttf|woff2?)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       name: "font/[name]-[hash:6].[ext]"
      //     }
      //   }
      // },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]-[hash:6][ext]",
        },
      },
    ],
  },
  plugins: [
    // 一个个的插件对象
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "哈哈哈"
    }),
    new DefinePlugin({
      BASE_URL: "'./'"
    })
    // 这里是可以传入自己定义的模板的
    // new HtmlWebpackPlugin({
    //   template: './public/index.html',
    // })
  ],
};

const path = require('path');

// 只能用Common.js导出，不可以使用ES6语法
// path:就是当前webpack.config.js的路径
// filename打包的文件名字

// npm install css-loader -D 安装loader
// module: 模块，配置css规则, 可以匹配多个规则  
// 正则表达式，匹配，$表示结尾

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  // 方式二： 配置loader
  module: {
    rules: [
      {
        //1.loader写法(语法糖) test:以什么结尾 .正则中需要转义
        test: /\.css$/,
        // 一个loader的情况下，直接写loader: 'css-loader'
        // loader: "css-loader"

        // 2.完整写法
        // {loader: "css-loader"}, loader从数组往后执行
        // style-loader其实就是创建一个style标签，然后把样式放到标签里面
        // 加载css-loader需要用到其他的loader，可以使用use: []
        use: [
          // 如果没有其他配置，就这么写
          "style-loader",
          "css-loader",
          // 浏览器前缀
          "postcss-loader"
          // {
          //   loader: "postcss-loader",
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         require("autoprefixer")
          //       ]
          //     }
          //   }
          // }
        ]
      },
      {
        // i表示忽略大小写
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      }
    ]
  }

}
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
  module: {
    rules: [
      {
        //1.loader写法(语法糖)
        test: /\.css$/,
        // loader: "css-loader"

        // 2.完整写法
        // {loader: "css-loader"}, loader从数组往后执行
        // style-loader其实就是创建一个style标签，然后把样式放到标签里面
        use: [

          "style-loader",
          "css-loader",
        ]
      }
    ]
  }

}
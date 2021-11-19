const path = require('path');

// 只能用Common.js导出，不可以使用ES6语法
// path:就是当前webpack.config.js的路径
// filename打包的文件名字

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  }

}
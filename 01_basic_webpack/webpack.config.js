const path = require("path");

// 只能用Common.js导出，不可以使用ES6语法
// path:就是当前webpack.config.js的路径
// filename打包的文件名字
// path: '绝对路径'
// __dirname：这里是D:/fbCode/gitcode/vue3code/webpcak/01_basic_webpack

// 这里我们采用module.exports，因为webpack是在node.js环境下执行的，如果想要使用export，需要进行额外的配置。
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  },
};

import { createApp } from "vue";
import axios from "axios";

import { sum } from "js/math";
const { priceFormat } = require("js/format");

import App from "@/vue/App";

import "./js/element";

// 判断模块热替换， 上面的不可以这么导入，需要使用下面的写法
if (module.hot) {
  module.hot.accept("./js/element.js", () => {
    console.log("element模块发生更新了");
  });
}

console.log(sum(20, 30));
console.log(priceFormat());

const app = createApp(App);
app.mount("#app");

console.log("123");
console.log("你好啊");

axios
  .get("/api/moment")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

import { sum } from "./js/math";
const { priceFormat } = require('./js/format');

// 产生了依赖，图 webpack打包关系图
import "./js/elelment";



console.log(sum(30, 23));
console.log(priceFormat());

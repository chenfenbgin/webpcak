// 依赖css
import "../css/style.css";
import "../css/title.less";
import "../css/image.css"

// 我们可以使用内联式来指定loader, 不推荐
// import "css-loader!../css/style.css";

const divEL = document.createElement("div");
divEL.className = "title";
divEL.innerHTML = "你好，李银河";

// 设置图片
const bgDivEL = document.createElement('div')
bgDivEL.className = "image-bg"

document.body.appendChild(divEL);
document.body.appendChild(bgDivEL);
// 我们执行webpack，这个js文件没有被打包，之前的bundle.js有被打包

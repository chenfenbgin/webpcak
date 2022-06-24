// 依赖css
import "../css/style.css";
import "../css/title.less";

// 加载css-loader方式一： 我们可以使用内联式来指定loader, 不推荐
// import "css-loader!../css/style.css";

const divEL = document.createElement("div");
divEL.className = "title";
divEL.innerHTML = "你好，李银河";

document.body.appendChild(divEL);
// 我们执行webpack，这个js文件没有被打包，之前的bundle.js有被打包

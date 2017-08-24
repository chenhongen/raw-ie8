# 简介
RAW=react+antd+webpack
本仓库为兼容ie8版本，基于[react-ie8。](https://github.com/xcatliu/react-ie8/tree/master/examples/hello-world)

# 扩展过程
1. react-router
npm install react-router@1.0.3 --save
（若提示确实history依赖：npm install history@1.17.0）

2. default引起的“缺少标识符”问题
export default xx 使用 export {xx} 替代；
import xx from 'path' 使用 const {xx} = require('path') 替代；

公司电脑IE9，模拟IE使用"es3ify-loader@0.2.0"有效，在自己的电脑IE8上无效，更改为"es3ify-webpack-plugin@0.0.1"（需在.babelrc中配置）。

~~"transform-es3-member-expression-literals"与"transform-es3-property-literals"用不用暂时无差异~~

3. antd
npm install antd@1.x --save（2.0以后版本不支持IE8）

Velocity: IE8 and below require jQuery to be loaded before Velocity. 
引入jq
同时还有media.match.min.js等antd依赖的js

4. 样式-加载器|按需加载插件
npm install style-loader css-loader --save-dev // url-loader file-loader
npm install babel-plugin-import --save-dev
npm install babel-plugin-transform-runtime --save-dev

.babelrc
"plugins": ["transform-runtime", ["import", {
  "libraryName": "antd",
  "style": "css"
}]]

使用的地方使用
import导入antd插件！

5. webpack
尝试了使用当前最新版本3.x.x的webpack，结果webpack3本身的js转ie8存在问题无法解决，又降到了1.x。

6. polyfill
使用antd后，es5-shim已经不足以满足需求，故根据antd官方推荐引入babel-polyfill。至于有了babel-polyfill是否还需要es5-shim有待测试。
npm install babel-polyfill --save-dev（需参照npm官方配置）

polyfill的大意就是扩展ie8等低版本浏览器中所不具备的方法。如foreach/keys等。

# 令人窒息的八阿哥
1. router - <Link>
当在entry.js入口文件写主页<HomePage>，并在其中写<Link>时，抛出“this.context.history is undefined”，将<HomePage>迁移至单独文件解决。





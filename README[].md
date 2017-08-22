# 简介
基于[react-ie8](https://github.com/xcatliu/react-ie8/tree/master/examples/hello-world)

# 扩展过程
1. webpack升级
原demo使用的是1.x的版本，升级到3。
  1.1 npm install babel-runtime --save-dev
2. react-router
npm install react-router@1.0.3 --save
（若提示确实history依赖：npm install history@1.17.0，笔者使用cnpm安装，可能因此导致的漏包。）

2.1 ~~es3ify-loader
npm install es3ify-loader --save-dev 未起作用~~

3. default引起的“缺少标识符”问题
export default xx 使用 export {xx} 替代；
import xx from 'path' 使用 const {xx} = require('path') 替代；

4. antd
npm install antd@1.x --save（2.0以后版本不支持IE8）

5. 样式-加载器|按需加载插件
npm install style-loader css-loader --save-dev // url-loader file-loader
npm install babel-plugin-import --save-dev
npm install babel-plugin-transform-runtime --save-dev
npm install babel-polyfill --save-dev

.babelrc
"plugins": ["transform-runtime", ["import", {
  "libraryName": "antd",
  "style": "css"
}]]

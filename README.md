# 简介
基于[react-ie8](https://github.com/xcatliu/react-ie8/tree/master/examples/hello-world)

# 扩展过程
1. react-router
npm install react-router@1.0.3 --save
（若提示确实history依赖：npm install history@1.17.0，笔者使用cnpm安装，可能因此导致的漏包。）

1.1 ~~es3ify-loader
npm install es3ify-loader --save-dev 未起作用~~

2. default引起的“缺少标识符”问题
export default xx 使用 export {xx} 替代；
import xx from 'path' 使用 const {xx} = require('path') 替代；



Velocity: IE8 and below require jQuery to be loaded before Velocity. 
引入jq


import导入antd插件

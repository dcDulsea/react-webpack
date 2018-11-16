# react-webpack
1. npm install
2. npm start     //port：9999
3. npm run build  //进行构建

# 更新日志
------------

## 2018／11／16
// -----------------------------------
1. 增加了Ant-Design库，可在webpack.common.js中定制主题
// ** 已在webpack.common.js中修改了默认颜色 **

2. 在打包后的css和js文件名中增加了chunkhash值，来避免缓存问题

3. 抽取了公用的模块进行分开打包，并将公用模块包的chunkhash值保持不变
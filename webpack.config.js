const webpack = require('webpack');
var es3ifyPlugin = require('es3ify-webpack-plugin');

module.exports = {
  entry: './entry.js',
  output: {
	path: "./", //输出文件夹
	filename: "bundle.js" //最终打包生成的文件名
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
         test: /\.css$/,
         loader: 'style-loader!css-loader'
      }
    ],
	// rules: [{
  //       test: /\.js$/,
  //       enforce: 'post', // post-loader处理
  //       loader: 'es3ify-loader'
  //     }
  //   ]
  },
  plugins: [
  new es3ifyPlugin()
]
};

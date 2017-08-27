const webpack = require('webpack');
var es3ifyPlugin = require('es3ify-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

// multiple extract instances
var extractCSS = new ExtractTextPlugin('stylesheets/[name].css');
//let extractLESS = new ExtractTextPlugin('stylesheets/[name].less');

module.exports = {
  entry: ["babel-polyfill", "./entry.js"],
  output: {
  	path: __dirname+'/raw/build', //输出文件夹
    publicPath: '/build',
  	filename: "[name].bundle.js" //最终打包生成的文件名
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: extractCSS.extract(['css'])
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
    new es3ifyPlugin(),
    //new webpack.optimize.UglifyJsPlugin(), // 打包时 -p
    new webpack.optimize.UglifyJsPlugin({
		compress: {
			properties: false,
			warnings: false
		},
		output: {
			beautify: true,
			quote_keys: true
		},
		mangle: {
			screw_ie8: false
		},
		sourceMap: false
	}),
    new webpack.optimize.CommonsChunkPlugin({
      name:'common', // 注意不要.js后缀
      //chunks:['react','react-dom'], // 会生成react.js，react-dom.js
      minChunks: 4
    }),
    extractCSS,// css抽取
    new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
      filename: '../index.html', //生成的html存放路径，相对于 outputPath
      template: './index.html' //html模板路径
    })
  ]
};

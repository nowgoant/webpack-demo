var path = require('path');
// var webpack = require('webpack');

/**
 * demo3
 */
var jsSrc = path.resolve('./src/scripts');
// console.log(jsSrc);

var webpackConfig = {
  resolve: {
    //查找module的话从这里开始查找
    root: jsSrc,
    extensions: ['', '.js', '.json', '.scss']
  },
  //入口的路径
  context: jsSrc,
  entry: {
    'index': ['./index.js'],
    'index2': ['./index.1.js'],
    'index3': ['./index.2.js']
  },
  output: {
    path: path.resolve(__dirname, 'src', 'dist/scripts'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        'presets': ['es2015', 'stage-1']
      }
    }, {
      test: /\.html$/,
      loaders: ['html-loader?minimize=false']
    }]
  },
  //是否生成source-map
  devtool: 'inline-source-map',
  // plugins: [
  //   /**
  //    * 环境变量
  //    */
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  //     }
  //   }),
  //   /**
  //    * 抽取公共脚本
  //    */
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'shared',
  //     filename: '[name].js'
  //   }),
  //   new webpack.optimize.DedupePlugin(),
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       'drop_debugger': true,
  //       'drop_console': true,
  //       warnings: true
  //     },
  //     output: {
  //       comments: false,
  //       ascii_only: true
  //     }
  //   }),
  //   new webpack.NoErrorsPlugin()
  // ]
};

/**
 * 热更新插件
 */
// for (var key in webpackConfig.entry) {
//   var entry = webpackConfig.entry[key];
//   webpackConfig.entry[key] = ['webpack-hot-middleware/client?&reload=true'].concat(entry);
// }

// webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = webpackConfig;
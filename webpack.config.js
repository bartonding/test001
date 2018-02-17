const webpack = require("webpack");
const path = require('path');
const ETP = require("extract-text-webpack-plugin");
// const QBSuperHtmlPlugin = require('./plugins/superhtml.js')
const QBSuperHtmlPlugin = require('@tencent/qbsuperhtml-webpack-plugin')

module.exports = {

  context: path.resolve(__dirname + "/src"),

  entry : {
    'a': './test/a.js'
  },

  output: {
    path: path.resolve(__dirname + "/dist"),
    publicPath : '',
    filename: "[name].js"
  },

  module: {
    loaders: [
      {
        test: /\.(png|jpg|gif)$/,
        use : [{
          loader:'file-loader',
          options:{name:'imgs/[name]_[sha512:hash:base64:6].[ext]'}
        }]
      }, {
        test: /\.(woff|eot|ttf|otf|svg)$/i,
        use : [{
          loader:'file-loader',options:{name:'fonts/[hash:8]_[name].[ext]'}
        }]
      }, {
        test: /\.css$/,
        use: ETP.extract({
          fallback : 'style-loader',
          use : 'css-loader'
        })
      }
    ]
  },

  resolve: {
    alias: {
      '@common' : path.resolve(__dirname, './src/common'),
      '@pages' : path.resolve(__dirname, './src/pages'),
      '@layout' : path.resolve(__dirname, './src/layout'),
      '@modules' : path.resolve(__dirname, './src/modules'),
      '@components' : path.resolve(__dirname, './src/components'),
      '@test' : path.resolve(__dirname, './src/test')
    }
  },

  plugins: [
    new ETP("[name].css")
    , new QBSuperHtmlPlugin({
      rootdir: __dirname,
      pages: [
        path.resolve(__dirname, './src/test/a.html')
      ],
      // mini: {
      //   'conservativeCollapse': false
      // }
    })
    // ,new webpack.optimize.UglifyJsPlugin({
    //   output: {comments: false},
    //   compress : {
    //     drop_console: true,
    //     warnings: false
    //   }
    // })
  ]

};

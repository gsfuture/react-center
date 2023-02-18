const { defineConfig } = require('@vue/cli-service')
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {

  configureWebpack: {
    externals: {
        lodash: '_',
        "@lerna-good/lerna-module-b":"var window.MyBoy"
    }
 
  }
}


//   chainWebpack:config=>{
//     //发布模式
//     config.when(process.env.NODE_ENV === 'production',config=>{
//         //entry找到默认的打包入口，调用clear则是删除默认的打包入口
//         //add添加新的打包入口
//         // config.entry('app').clear().add('./src/main-prod.js')

//         config.entry('app').clear().add('./main.ts')

//         //使用externals设置排除项
//         config.set('externals',{
//             // vue:'Vue',
//             // 'vue-router':'VueRouter',
//             // axios:'axios',
//             lodash:'_',
//             // echarts:'echarts',
//             // nprogress:'NProgress',
//             // 'vue-quill-editor':'VueQuillEditor'
//         })
//     })
//     //开发模式
//     config.when(process.env.NODE_ENV === 'development',config=>{
//         // config.entry('app').clear().add('./src/main-dev.js')
//         config.entry('app').clear().add('./main.ts')
//     })
// }
// }

// module.exports = defineConfig({
//   transpileDependencies: true,

//   configureWebpack:config =>{
//     config.externals = {
//          // lodash = window._
//          lodash: "_"
//     }

//     config.plugins = [
//       // 指定模板文件
//       new HtmlWebpackPlugin({
//         template: "./public/index.html",

//         inject: true,
//         hash: new Date().getTime(),
//         url: BASE_URL,  //需要这里传参
//         minify: {
//           removeComments: true,
//           collapseWhitespace: true,
//           removeAttributeQuotes: true
//         },
//         chunksSortMode: 'manual'
        
//       }),
//     ]
// }
// })

module.exports = {
  devServer: {
    // proxy: { // 设置代理
    //   '/qzConsole': {
    //     target: 'http://qz.chinaacc.com/',
    //     ws: true,
    //     changeOrigin: true
    //   }
    // },
    disableHostCheck: true
  },
  lintOnSave: false // eslint-loader 是否在保存的时候检查
}

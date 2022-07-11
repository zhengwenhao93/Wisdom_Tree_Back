module.exports = ({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    open: true,
    https: false,
    port: 9999,
    host: 'localhost',
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_SERVICE_URL,
        changeOrigin: true,
        PathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
})

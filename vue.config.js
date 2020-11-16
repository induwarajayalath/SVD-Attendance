module.exports = {
  devServer: {
    disableHostCheck: true
  },

  productionSourceMap: false,
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  },
  lintOnSave: false
};

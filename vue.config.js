module.exports = {
  // configureWebpack: {
  //   output: {
  //     libraryExport: "default",
  //   },
  // },
  chainWebpack: (config) => {
    config.externals({
      ...config.get("externals"),
      // "@vue/composition-api": "@vue/composition-api",
      // vue: "vue",
    });
  },
};

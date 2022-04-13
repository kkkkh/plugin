module.exports = {
  // configureWebpack: {
  //   output: {
  //     libraryExport: "default",
  //   },
  // },
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === "lib") {
      config.externals({
        ...config.get("externals"),
        "@vue/composition-api": "@vue/composition-api",
        vue: "vue",
      });
    } else {
      config.externals({
        ...config.get("externals"),
      });
    }
  },
};

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/sass/_variables.scss";',
      },
    },
  },
  devServer: {
    watchOptions: {
      poll: true,
    },
  },
};

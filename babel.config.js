module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // // PATH ALIASES DON'T WORK!!! THIS IS SO FRUSTRATING!!!
    // plugins: [
    //   [
    //     // get babel to recognize path aliasess
    //     "module-resolver",
    //     {
    //       root: ["./src"],
    //       extensions: [
    //         ".ts",
    //         ".tsx",
    //         ".js",
    //         ".jsx",
    //         ".android.js",
    //         ".ios.js",
    //         ".web.js",
    //       ],
    //       alias: {
    //         _components: "src/components",
    //         _navigations: "src/navigations",
    //         _screens: "src/screens",
    //         _styles: "src/styles",
    //         _utils: "src/utils",
    //         _assets: "src/assets",
    //       },
    //       cwd: "babelrc",
    //     },
    //   ],
    // ],
  };
};

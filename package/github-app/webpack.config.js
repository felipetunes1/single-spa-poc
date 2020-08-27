const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "hdi-seguros",
    projectName: "github-app",
    webpackConfigEnv,
  });

  return webpackMerge.merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  });
};

var upstreamTransformer = require("metro/src/reactNativeTransformer");
var sassTransformer = require("react-native-typed-sass-transformer");

module.exports.transform = function({ src, filename, options }) {
  if (filename.endsWith(".scss")) {
    return sassTransformer.transform({ src, filename, options });
  } else {
    return upstreamTransformer.transform({ src, filename, options });
  }
};

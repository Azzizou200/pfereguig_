// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const { withReanimated } = require("react-native-reanimated");

const config = getDefaultConfig(__dirname);

module.exports = withReanimated(config);

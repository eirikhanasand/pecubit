module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    ["module-resolver", {
      "alias": {
        "@components": "./src/components",
        "@screens": "./src/screens",
        "@themes": "./src/themes",
        "@assets": "./public/assets",
        "@text": "./public/text",
        "@nav": "./src/nav"
      }
    }]
  ]
};

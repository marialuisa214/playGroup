module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      [
      "module-resolver", {
        "root": ["./src"],
        "alias": {
          "@assets": "./scr/assests",
          "@components": "./scr/components",
          "@routes":"./src/routes",
          "@storage":"./src/storage",
          "@screens": "./scr/screens",
          "@theme": "./scr/theme",
          "@utils": "./scr/utils",
        }
      }]]
    
  };
};

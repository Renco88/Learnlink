const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

// Prevent Metro from trying to load `.css` files like `global.css`
config.resolver.assetExts.push('css');

module.exports = config;

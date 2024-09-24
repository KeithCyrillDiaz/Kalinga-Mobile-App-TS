const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);
  config.resolver.sourceExts.push('cjs');
  
  config.resolver.alias = {
    '@': './src/',
    '@@': './'
  };

  return config;
})();
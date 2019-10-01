const rewireReactHotLoader = require('react-app-rewire-hot-loader');

// Used exclusively to get react hot loader working. Makes it far easier to develop components.
module.exports = function override(config, env) {
  if (env === 'development') {
    config.resolve.alias['react-dom'] = '@hot-loader/react-dom';
  }
  config = rewireReactHotLoader(config, env);
  return config;
};
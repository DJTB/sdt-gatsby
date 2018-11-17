const babelOptions = {
  presets: ['env'],
  env: {
    test: {
      presets: ['es2015', 'react']
    }
  }
};

module.exports = require('babel-jest').createTransformer(babelOptions);

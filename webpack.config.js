const path = require('path');

const config = {
  entry: './engine/index.js',
  output: {
    filename: 'engine.js',
    path: path.resolve(__dirname, 'dist')
  }
}

module.exports = config;

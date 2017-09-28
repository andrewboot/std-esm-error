require = require('@std/esm')(module, {
  esm: 'all',
  cjs: true,
});

module.exports = require('./somescript');

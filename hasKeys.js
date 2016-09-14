
var has = require('has');

function hasKeys(obj) {
  for (var key in obj) {
    if (has(obj, key)) {
      return true;
    }
  }
  return false;
}

module.exports = hasKeys;

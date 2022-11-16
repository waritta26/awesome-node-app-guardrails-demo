var path = require('path');
// test
exports.file = function(fileName) {
  var scriptName = path.basename(fileName);
  console.log('current file: ' + scriptName);
};

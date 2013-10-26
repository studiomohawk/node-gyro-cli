var drone = require('ar-drone');

module.exports = function() {
  console.log('Entering REPL...');
  var client = drone.createClient();
  client.createRepl();
};

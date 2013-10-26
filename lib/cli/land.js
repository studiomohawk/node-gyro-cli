var drone = require('ar-drone');

module.exports = function() {
  console.log('Landing...');
  var client = drone.createClient();
  client.land();
  console.log('Landed');
};

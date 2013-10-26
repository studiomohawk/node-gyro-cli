var drone = require('ar-drone');

module.exports = function() {
  console.log('Fixing the emergency mode...');
  var client = drone.createClient();
  client.disableEmergency();
  process.exit(1);
};

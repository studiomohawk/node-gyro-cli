var drone = require('ar-drone');

module.exports = function() {
  console.log('Flying...');
  var client = drone.createClient();
  client.takeoff();
  console.log('Taking off');
  process.exit(1);
};

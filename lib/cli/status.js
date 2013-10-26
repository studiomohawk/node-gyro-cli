var drone = require('ar-drone');

module.exports = function() {
  console.log('Reading Data...');
  var client = drone.createClient();
  client.config('general:navdata_demo', 'FALSE');
  client.on('navdata', console.log);
};

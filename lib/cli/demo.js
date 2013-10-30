var drone = require('ar-drone');

module.exports = function() {
  console.log('Starting demo flight...');
  var client = drone.createClient();
  client.takeoff();
  client
    .after(5000, function() {
    console.log('Rotating...');
    this.clockwise(0.5);
  })
  .after(3000, function() {
    console.log('Stop then land.');
    this.stop();
    this.land();
    process.exit(1);
  });
};

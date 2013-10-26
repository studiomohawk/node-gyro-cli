var drone = require('ar-drone');

module.exports = function() {
  console.log('Starting demo flight...');
  var client = drone.createClient();
  client.takeoff();
  client
    .after(5000, function() {
    this.clockwise(0.5);
  })
  .after(3000, function() {
    this.stop();
    this.land();
    process.exit(1);
  });
};

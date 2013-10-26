var command = {
  help:   require('./help'),
  demo:   require('./demo'),
  land:   require('./land'),
  fly:    require('./fly'),
  status: require('./status'),
  repl:   require('./repl'),
  reset:  require('./reset')
}

module.exports = function(argv) {
  // TODO:
  // Use command table

  // gyro.js help
  if ( argv._[0] === 'help' ) {
    command.help(argv);
  }
  // gyro.js demo
  if ( argv._[0] === 'demo' ) {
    command.demo();
  }
  // gyro.js land
  if ( argv._[0] === 'land' ) {
    command.land();
  }
  // gyro.js fly
  if ( argv._[0] === 'fly' ) {
    command.fly();
  }
  // gyro.js status
  if ( argv._[0] === 'status' ) {
    command.status();
  }
  // gyro.js repl
  if ( argv._[0] === 'repl' ) {
    command.repl();
  }
  // gyro.js reset
  if ( argv._[0] === 'reset' ) {
    command.reset();
  }
};

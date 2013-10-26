module.exports = function(argv) {
  var basepath;
  var filepath;
  var data;

  filepath = argv._.slice(0);
  filepath.push('txt');
  filepath = filepath.join('.');

  basepath = path.join(__dirname, '..', '..', 'doc', 'cli');
  filepath = path.join(basepath, filepath);

  data = fs.readFileSync(filepath, 'utf8');

  console.log('\n' + data + '\n');
};

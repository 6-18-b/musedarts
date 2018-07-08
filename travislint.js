var lint = require('travis-lint');
lint(fs.readFileSync('.travis.yml'), function(err, warnings) {
  console.log(warnings);
});

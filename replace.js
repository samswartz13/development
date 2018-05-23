var replace = require("replace");
 
replace({
  regex: "-dev",
  replacement: ".min",
  paths: ['dist/index.html'],
  recursive: true,
  silent: false,
});
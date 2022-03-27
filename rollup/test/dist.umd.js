(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  var name = "study";
  var version = "1.0.0";
  var description = "";
  var main = "koa/index.js";
  var type = "module";
  var scripts = {
  	build: "rollup -c ./rollup/rollup.config.js"
  };
  var repository = {
  	type: "git",
  	url: "git+https://github.com/Alicevia/I-love-JS.git"
  };
  var keywords = [
  ];
  var author = "";
  var license = "ISC";
  var bugs = {
  	url: "https://github.com/Alicevia/I-love-JS/issues"
  };
  var homepage = "https://github.com/Alicevia/I-love-JS#readme";
  var dependencies = {
  	"@rollup/plugin-json": "^4.1.0",
  	nodemon: "^2.0.13",
  	rollup: "^2.64.0"
  };
  var packagejson = {
  	name: name,
  	version: version,
  	description: description,
  	main: main,
  	type: type,
  	scripts: scripts,
  	repository: repository,
  	keywords: keywords,
  	author: author,
  	license: license,
  	bugs: bugs,
  	homepage: homepage,
  	dependencies: dependencies
  };

  console.log("123");
  console.log(packagejson);

}));

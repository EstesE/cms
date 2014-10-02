/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('ember-cli/node_modules/broccoli-static-compiler');
var mergeTrees = require('ember-cli/node_modules/broccoli-merge-trees');

var app = new EmberApp();


var extraAssets = pickFiles('app', {
    srcDir: 'images',
    destDir: 'images'
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

// Boostrap
app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', {
  destDir: 'assets'
});


var imageTree  = mergeTrees([app.toTree(), extraAssets]);
module.exports = mergeTrees([app.toTree(), imageTree ], { overwrite: true });

//module.exports = app.toTree();

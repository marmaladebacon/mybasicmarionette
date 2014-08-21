mybasicmarionette
=================

Teaching myself marionette from the ground up.
Note: While the directory structure used in this project is not meant to be the only structure used, it is meant to be
  the easiest to get started without modifying the package managers defaults and still provide a clean template to start
  with.

* First steps
  * Configure your manifest file package.json (manually like i did, or use npm init) to enable the use of npm.
    * note the difference between a JavaScript object literal and JSON
      * eg
        { "keyA": "2", "keyB": "twenty-five"} vs
        {keyA: 2, keyB: "twenty-five"}
        and json can't have functions assigned to them.
    * See https://www.npmjs.org/doc/files/package.json.html for more information
    * Ensure you have grunt and bower included
  * run "npm install"
    * npm allows us to manage JavaScript modules in a node.js environment, or development tools built using node.js such
    as Karma, lint, minifiers. npm can install them locally in a project (by default in node_modules) or globally to be
    used by multiple projects.
  * Configure your manifest file bower.json with the following steps
    * run "bower init"

    [?] name: mybasicmarionette
    [?] version: 0.1.0
    [?] description: My Basic Marionette Template
    [?] main file:
    [?] what types of modules does this package expose?
    [?] keywords:
    [?] authors: mko <zaeni.redmage@gmail.com>
    [?] license: MIT
    [?] homepage: https://github.com/zaeni/mybasicmarionette
    [?] set currently installed components as dependencies? Yes
    [?] add commonly ignored files to ignore list? Yes
    [?] would you like to mark this package as private which prevents it from being accidentally published to the registry? Yes

    {
      name: 'mybasicmarionette',
      version: '0.1.0',
      homepage: 'https://github.com/zaeni/mybasicmarionette',
      authors: [
        'mko <zaeni.redmage@gmail.com>'
      ],
      description: 'My Basic Marionette Template',
      license: 'MIT',
      private: true,
      ignore: [
        '**/.*',
        'node_modules',
        'bower_components',
        'test',
        'tests'
      ]
    }

    [?] Looks good? Yes
  * run the following (bower will add it automatically)
    * "bower install marionette"
      * this should also install backbone, jQuery and underscore.
    * "bower install json2"
    * bower manages frontend dependencies, such as jQuery, AngularJS, underscore. By default it installs them in a folder
     called bower_components
    *
  * Set up grunt
    * see the included Gruntfile example, which was taken from

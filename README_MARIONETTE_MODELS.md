The following notes are made after studying the examples used in Backbone.Marionette.js: A Gentle Introduction, which
itself admits to taking the structure from Brian Mann at BackboneRails.com.

Also note that marionette modules have the same end goal as AMD/requireJS, so you should use one or the other.
See: https://github.com/marionettejs/backbone.marionette/wiki/AMD-Modules-vs-Marionette%27s-Modules

Why shouldn't we put everything into index.html?
===============================================
* Scalability reasons, having everything in a single file is generally not great for readability.

Basic refactoring strategy
-------------------------
* One file for our general app code that defines regions, the 'start' handler etc: app.js
* One **module** to manage our entities, broken down into one file per type : assets/js/entities/
* One **module** for each sub-application. A sub-application is defined as having a "functional end result".
 In our contact app case we have a sub-app that manages our contacts


Backbone / Marionette specific JavaScript notes and usages
=================

.extend vs new
-----------------

You may have come across the following lines:

ContactManager.StaticView = Marionette.ItemView.extend({
       id: "static-view",
       tagName: "span",
       template: "#static-template"
    });

    followed by
var staticView = new ContactManager.StaticView({
            tagName: "ul",
            template: "#list-item-template"
        });

What is the difference?
The first returns a constructor(blueprint/project of the house/whatever you want to call a plan) that when called by the
second with a 'new' keyword, returns an instance of that object.




/**
 * Created by mko on 9/2/14.
 */

ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
   List.Contact = Marionette.ItemView.extend({
       tagName: "tr",
       template: "#contact-list-item"
   });
// Use CompositeView (instead of CollectionView) if you want to wrap a template around the collection (eg: a list with a header and footer).
// CollectionView doesn't know how to render a template.
   List.Contacts = Marionette.CompositeView.extend({
       tagName: "table",
       className: "table table-hover",
       template: "#contact-list",
       childView: List.Contact,
       childViewContainer: "tbody"
   });

    List.ContactAvailable = Marionette.ItemView.extend({
       tagName: "li",
       template: "#contact-list-available-item"
    });
   List.ContactsAvailable = Marionette.CompositeView.extend({
       tagName: "div",
       template: "#contact-list-available",
       childView: List.ContactAvailable,
       childViewContainer: "ul"
   });

   List.ContactWithButton = Marionette.ItemView.extend({
      tagName: "tr",
      template: "#contact-list-item-button",

      events: {
        "click": "highlightName",
        "click button": function(e){
            e.stopPropagation();
            alert("button was clicked");
        }
      },
      // el vs $el

      // el is the DOM element. ALl views have a DOM element. According to the documentation at http://backbonejs.org/#View-el
      // this.el is created from the view's tagName, className, id, and attributes properties, if specified. Else it will be
      // an empty div

      //$el is the jQuery equivalent of the above with the DOM element and all the jQuery functions such as hide, show
      highlightName: function(e){
        this.$el.toggleClass("warning");
      }
   });

   List.ContactsWithButton = Marionette.CompositeView.extend({
        tagName: "table",
        className: "table table-hover",
        template: "#contact-list-buttons",
        childView: List.ContactWithButton,
        childViewContainer: "tbody"
   });
});
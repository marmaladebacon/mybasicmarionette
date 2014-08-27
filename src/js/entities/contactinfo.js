/**
 * Created by mko on 8/27/14.
 */
// See https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.module.md
// the 2nd parameter here is the callback function definition
// it will be invoked immediately on calling the module method.
// the 6 parameters that are specified in the order for the callback to work are
// the module itself, the app object, Backbone, Backbone.Marionette, jQuery, Underscore, followed by any custom arguments
ContactManager.module("Entities", function(Entities, ContactManager, Backbone, Marionette, $, _){
    Entities.Contact = Backbone.Model.extend({
        defaults: {
            firstName: "NA",
            lastName: " NA ",
            phoneNumber: " No real phone number ver 2"
        }
    });

    Entities.ContactCollection = Backbone.Collection.extend({
        tagName: "ul",
        model: Entities.Contact,
        //reversing the order
        comparator:  function(a,b){
            // -1 if a is before b
            // 1 if a is after b
            // 0 if a == b
            var aFirstName = a.get("firstName");
            var bFirstName = b.get("firstName");
            if(aFirstName === bFirstName){
                var aLastName = a.get("lastName");
                var bLastName = b.get("lastName");
                if(aLastName == bLastName){
                    return 0;
                }
                if(aLastName < bLastName){
                    return 1;
                }else{
                    return -1;
                }
            }else if(aFirstName < bFirstName){
                return 1;
            }else{
                return -1;
            }
        }
    });

    var contacts;

    var initialiseContacts = function(){
     contacts = new Entities.ContactCollection(
        [{
            id:1,
            firstName: "Test",
            lastName: " Test ",
            phoneNumber: " 4567-21314 "
        },
        {
            id:2,
            firstName: "Test2",
            lastName: " Test2 ",
            phoneNumber: " 45223-314 "
        }]
     );
    };

    var API = {
      getContactEntities: function(){
        if(contacts === undefined){
            initialiseContacts();
        }
        return contacts;
      }
    };
    // The reqres attribute is part of the messaging system in marionette, see
    // https://github.com/marionettejs/backbone.wreqr
    ContactManager.reqres.setHandler("contact:entities", function(){
       return API.getContactEntities();
    });
});


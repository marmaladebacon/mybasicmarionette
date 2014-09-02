/**
 * Created by mko on 9/2/14.
 */
ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _){
   List.Controller = {
    listContacts: function(){
        var contacts = ContactManager.request("contact:entities");

        var contactsListView = new List.Contacts({
           collection: contacts
        });

        var availableContactsView = new List.ContactsAvailable({
           collection: contacts
        });

        var availableContactsButton = new List.ContactsWithButton({
           collection: contacts
        });

        ContactManager.mainRegion.show(contactsListView);
        ContactManager.mainRegion2.show(availableContactsView);
        ContactManager.mainRegion3.show(availableContactsButton);
    }
   }
});

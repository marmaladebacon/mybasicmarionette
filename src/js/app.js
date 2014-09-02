/**
 * Created by mko on 8/27/14.
 */

var ContactManager = new Marionette.Application();
ContactManager.addRegions({
    mainRegion: "#main-region",
    mainRegion2: "#main-region2",
    mainRegion3: "#main-region3"
});

ContactManager.on("start", function(){
   ContactManager.ContactsApp.List.Controller.listContacts();
});

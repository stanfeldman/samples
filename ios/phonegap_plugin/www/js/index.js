var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // note that this is an event handler so the scope is that of the event
        // so we need to call app.report(), and not this.report()
        app.report('deviceready');
        Plugin1.first("hey", function(msg){
            console.log("success Plugin1.first: " + msg);
        }, function(err){
            console.log("error Plugin1.first: " + err);
        });
        //app.get_contacts();
        // window.plugins.localNotification.add({
        //     date: new Date(),
        //     message: 'Hello world!',
        //     repeat: 'weekly', // will fire every week on this day
        //     badge: 1,
        //     foreground:'foreground',
        //     background:'background',
        //     sound:'sub.caf'
        // });
        Notifier.show("test", "hey", function(msg){
            console.log("clicked Notifier.show: " + msg);
        }, function(err){
            console.log("error Notifier.show: " + err);
        });
        setTimeout(function(){
            Notifier.hide_all(function(){
                Notifier.show("test", "hello world");
            });
        }, 2000);
        Notifier.on_click("test", function(){
            console.log("hueay! clicked on test");
        });
    },
    report: function(id) { 
        console.log("report:" + id);
        // hide the .pending <p> and show the .complete <p>
        document.querySelector('#' + id + ' .pending').className += ' hide';
        var completeElem = document.querySelector('#' + id + ' .complete');
        completeElem.className = completeElem.className.split('hide').join('');
    },
    get_contacts: function(){
        var need_contact = {phone: "+79169534399", email: "test@gmail.com"};
        var callback = function(contacts){
            for(var i = 0; i < contacts.length; ++i){
                var contact = contacts[i];
                // if(contact.emails)
                //     for(var j = 0; j < contact.emails.length; ++j){
                //         var e = contact.emails[j].value;
                //         if(e == need_contact.email){
                //             console.log("hey! " + contact.name.formatted);
                //             contact.nickname = "founded";
                //             contact.save();
                //         }
                //     }
                console.log("name: " + JSON.stringify(contact.name) + 
                            "; phoneNumbers: " + JSON.stringify(contact.phoneNumbers) + 
                            "; emails: " + JSON.stringify(contact.emails));
            }
        };
        var errback = function(err){
            console.log("contacts error: " + err);
        };
        var fields = ["name", "emails", "phoneNumbers"];
        var options = new ContactFindOptions();
        options.filter="";
        options.multiple=true;
        navigator.contacts.find(fields, callback, errback, options);
    }
};

function foreground(id){
    console.log("I WAS RUNNING ID="+id);
}
function background(id){
    console.log("I WAS IN THE BACKGROUND ID="+id);
    alert("hey");
}

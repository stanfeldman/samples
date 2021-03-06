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
        //window.plugins.statusBarNotification.notify("Put your title here", "Put your message here");
        Notifier.show("test_not", "Put your title here", "Put your message here");
    },
    report: function(id) { 
        console.log("report:" + id);
        // hide the .pending <p> and show the .complete <p>
        document.querySelector('#' + id + ' .pending').className += ' hide';
        var completeElem = document.querySelector('#' + id + ' .complete');
        completeElem.className = completeElem.className.split('hide').join('');
    }
};

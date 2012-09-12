//application******
$(document).on("mobileinit", function() {
	console.log("jqueryui initializing...");
    $.mobile.ajaxEnabled = false;
    $.mobile.ajaxLinksEnabled = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.linkBindingEnabled = false;
    $.mobile.pushStateEnabled = false;
	console.log("jqueryui initialized.");
});
window.App = Ember.Application.create({
	ApplicationController: Ember.Controller.extend(),
	ApplicationView: Ember.View.extend({ 
		templateName: "application",
		attributeBindings: ["data-role"],
		'data-role': "page",
		didInsertElement: function() {
	        $.mobile.changePage(this.$());
	    }
	}),
	ready: function(){
		console.log("ember initializing...");
		this.initialize();
		$("#contributors_list").listview();
		console.log("ember initialized.");
	}
});
//models*********************************************
App.Contributor = Ember.Object.extend();
App.Contributor.reopenClass({
	allContributors: [],
	find: function(){
		if(this.allContributors.length > 0){
			var context = this;
			Ember.run.next(function() {
				var last = context.allContributors[context.allContributors.length-1];
				if(last){
					context.allContributors.removeObject(last);
					context.allContributors.addObject(last);
				}
	        });
			return this.allContributors;
		}
		$.ajax({
			url: 'https://api.github.com/repos/emberjs/ember.js/contributors',
	     	dataType: 'jsonp',
	     	context: this,
	    	success: function(response){
	        	response.data.forEach(function(contributor){
	        		this.allContributors.addObject(App.Contributor.create(contributor));
	        	}, this);
	    	}
	    });
	    return this.allContributors;
	},
	findOne: function(username){
		var contributor = App.Contributor.create({login: username});
		$.ajax({
			url: 'https://api.github.com/repos/emberjs/ember.js/contributors',
		    dataType: 'jsonp',
		    context: contributor,
		    success: function(response){
		      this.setProperties(response.data.findProperty('login', username));
		    }
		});
		return contributor;
	}
});
//conrollers********************************************
App.AllContributorsController = Ember.ArrayController.extend({
	contentLengthDidChange: function(){
        Ember.run.later(function() {
        	try {
            	$("#contributors_list").listview('refresh');
            }
            catch(e){
            	$("#contributors_list").listview();	
            }
        }, 10);//some magic, next doesn't work
    }.observes('content.length')
});
App.OneContributorController = Ember.ObjectController.extend();
//views**************************************************
App.AllContributorsView = Ember.View.extend({
	templateName: "contributors",
});
App.OneContributorView = Ember.View.extend({
	templateName: "a-contributor"
});
//router**************************************************
App.Router = Ember.Router.extend({
	enableLogging: true,
	root: Ember.Route.extend({
		contributors: Ember.Route.extend({
			route: "/",
			showContributor: Ember.Route.transitionTo("aContributor"),
			connectOutlets: function(router){
				router.get("applicationController").connectOutlet("allContributors", App.Contributor.find());
			}
		}),
		aContributor: Ember.Route.extend({
			route: "/:username",
			connectOutlets: function(router, contributor){
				router.get("applicationController").connectOutlet("oneContributor", contributor);
			},
			serialize: function(router, context){
				return {username: context.get("login")}
			},
			deserialize: function(router, url_params){
				return App.Contributor.findOne(url_params.username)
			}
		})
	})
});
//*************
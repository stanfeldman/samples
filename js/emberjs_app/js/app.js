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
		console.log("ember initialized.");
	}
});
//models*********************************************
App.Contributor = Ember.Object.extend();
App.Contributor.reopenClass({
	allContributors: [],
	find: function(){
		var self = this;
		if(self.allContributors.length > 0)
			return self.allContributors;
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
		/*Ember.run.next(function() {
			self.allContributors.addObject(App.Contributor.create({login: "vasya"}));
        });*/
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
        Ember.run.next(function() {
        	$("#contributors_list").listview('refresh');
        });
    }.observes('content.@each')
});
App.AllContributorsHeaderController = Ember.Controller.extend();

App.OneContributorController = Ember.ObjectController.extend();
App.OneContributorHeaderController = Ember.ObjectController.extend();
//views**************************************************
App.AllContributorsView = Ember.View.extend({
	templateName: "contributors",
	didInsertElement: function(){
		$("#contributors_list").listview();
	}
});
App.AllContributorsHeaderView = Ember.View.extend({
	templateName: "contributors_header",
});

App.OneContributorView = Ember.View.extend({
	templateName: "a-contributor"
});
App.OneContributorHeaderView = Ember.View.extend({
	templateName: "a-contributor_header"
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
				router.get("applicationController").connectOutlet("header", "allContributorsHeader");
			}
		}),
		aContributor: Ember.Route.extend({
			route: "/:username",
			connectOutlets: function(router, contributor){
				router.get("applicationController").connectOutlet("oneContributor", contributor);
				router.get("applicationController").connectOutlet("header", "oneContributorHeader", contributor);
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
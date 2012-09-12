//application******
window.App = Ember.Application.create({
	ApplicationController: Ember.Controller.extend(),
	ApplicationView: Ember.View.extend({ templateName: "application"}),
	ready: function(){
		this.initialize();
	}
});
//models****
App.Contributor = Ember.Object.extend();
App.Contributor.reopenClass({
	allContributors: [],
	find: function(){
		this.allContributors = [];
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
//conrollers******
App.AllContributorsController = Ember.ArrayController.extend();
App.OneContributorController = Ember.ObjectController.extend();
//views**********
App.AllContributorsView = Ember.View.extend({templateName: "contributors"});
App.OneContributorView = Ember.View.extend({templateName: "a-contributor"});
//router********
App.Router = Ember.Router.extend({
	//enableLogging: true,
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
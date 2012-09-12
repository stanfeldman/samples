window.App = Em.Application.create({
	greet: "Boris",
	ready: function() {
  		console.log("ready.");
  		setTimeout(function(){
  			App.set("greet", "Stas");
  			//App.v2.remove();
  		}, 2000);
  	}
});

App.Person = Em.Object.extend({
	name: "Unknown",
	age: null,
	say: function(thing) {
		console.log(this.get("name"), thing);
	}
});
App.LoudPerson = App.Person.extend({
	say: function(thing) {
		this._super(thing.toUpperCase());
	}
});
App.Person.reopen({
	nameChanged: Ember.observer(function(){
		console.log("new name: ", this.get("name"));
	}, "name")
});

App.p1 = App.Person.create({
	status: "offline"
});
App.p1.say("hello");
App.p2 = App.LoudPerson.create({
	name: "Stas",
	age: 23,
	statusBinding: "App.p1.status"
});
App.p2.say("hello");
App.p2.set("name", "Stassss");
console.log(App.p2.get("status"));
App.p1.set("status", "online");


App.MyView = Em.View.extend();

App.v2 = Em.View.create({
	templateName: "greet_tmpl",
	name: "Ivan",
	is_register: true,
	is_login: false,
	is_disabled: false,
	edit: function(event){
		event.view.set("name", "Kolyan");
		console.log(event);
	},
	people: ["Yehuda Katz","Alan Johnson","Charles Jolley"]
});
App.v2.appendTo("#container");

App.personController = Em.ArrayController.create({
	content: [],
	init: function(){
		this.pushObject(App.p1);
		this.pushObject(App.p2);
		var p3 = App.Person.create({
			name: "Borya",
			age: 21
		});
		this.pushObject(p3);
		console.log("persons created");
	}
});

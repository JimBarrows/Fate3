App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter.extend();

Ember.RadioButton = Ember.View.extend({
    tagName : "input",
    type : "radio",
    attributeBindings : [ "name", "type", "value", "checked:checked:" ],
    click : function() {
        this.set("selection", this.$().val())
    },
    checked : function() {
        return this.get("value") == this.get("selection");   
    }.property()
});

App.Router.map(function() {
		this.resource('games')
		this.resource('game', function() {
				this.route('new')
		})
});

App.GamesRoute = Ember.Route.extend({
		actions: {
				newGame: function() {
						this.transitionTo('game.new')
				}
		},
		model: function() {
				return this.store.find('game');
		}
})

App.GameNewRoute = Ember.Route.extend({

		setupController: function(controller, model) {
				controller.set('content', model)
		},
		model: function() {
				return this.store.createRecord('game')
		}
})





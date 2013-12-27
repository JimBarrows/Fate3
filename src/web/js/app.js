App = Ember.Application.create();


App.ApplicationAdapter = DS.RESTAdapter.extend({
		namespace: 'api/v1'
});

//App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function() {

		this.resource('games')

		this.resource('game', {path: "/game"}, function() {
				this.route('new')
				this.route('index', {path:"/:game_id"})
				this.route('edit', {path:"/:game_id/edit"})
		})
});

App.GamesRoute = Ember.Route.extend({

		model: function( params) {
				return this.store.find('game');
		}
})

App.GameNewRoute = Ember.Route.extend({

		model: function() {
				return this.store.createRecord('game')
		}
})

App.GameEditRoute = Ember.Route.extend({

		model: function(params, transition, queryParams) {
				return this.get('store').find('game', params.game_id)
		}
})

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

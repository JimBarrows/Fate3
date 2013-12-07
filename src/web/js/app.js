App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter.extend();

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

App.GameNewController =  Ember.ObjectController.extend({
		actions: {
				changeTab: function( newTab) {
						this.set('currentTab', newTab)
				},

		},
		currentTab : 'issues',
		isIssuesTab: function() { return this.get('currentTab') == 'issues'}.property('currentTab'),
		isFacesTab: function() { return this.get('currentTab') == 'faces'}.property('currentTab'),
		isPlacesTab: function() { return this.get('currentTab') == 'places'}.property('currentTab'),
		isDialsTab: function() { return this.get('currentTab') == 'dials'}.property('currentTab'),
		isSkillsTab: function() { return this.get('currentTab') == 'skills'}.property('currentTab'),
		isStuntsTab: function() { return this.get('currentTab') == 'stunts'}.property('currentTab'),
		isExtrasTab: function() { return this.get('currentTab') == 'extras'}.property('currentTab')

})

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

App.GameNewRoute = Ember.Route.extend({

		model: function() {
				return this.store.createRecord('game')
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

App.IssueController =  Ember.ObjectController.extend({
		actions:{
				edit: function() {
						this.set('isEditing', true)
				},
				save: function() {
						this.get('model').save()
						this.set('isEditing', false)
				},
				delete: function() {
						var model=this.get('model')
						var game = model.get('game')
						game.get('issues').removeObject(model)
						game.save()
				}
		},
		isEditing: false
})

App.IssueListComponent = Ember.Component.extend({
		actions: {
				add: function() {
						var newIssue = this.get('newIssue')
						if( !newIssue.trim()) {return;}
						var store = this.get('targetObject.store');
						var modelName='CurrentIssue'
						if ( !this.get('current')){
								modelName='PendingIssue'
						}
						var issue = store.createRecord(modelName, {
								name: newIssue,
								current: this.get('current'),
								game: this.get('parent')
						})
						this.set('newIssue','')
						issue.save()
						this.get('list').pushObject( issue)
			
				}
		},
		current: true,
		newIssue: '',
		list: []
});
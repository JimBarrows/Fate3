App.IssueListComponent = Ember.Component.extend({
		actions: {
				add: function() {
						var newAspect = this.get('newIssue')
						if( !newAspect.trim()) {return;}
						var store = this.get('targetObject.store');
						var current = this.get('current')
						var game = this.get('parent')
						var current = this.get('current')
						var recordName = 'currentIssue'
						if( !current) {
								recordName="pendingIssue"
						}
						var issue = store.createRecord(recordName, {
								name: newAspect,
								current: current
						})
						if( current) {
								game.get('currentIssues').pushObject( issue)
						} else {
								game.get('pendingIssues').pushObject( issue)
						}
						issue.set('game', game)
						game.save()
						issue.save()
						this.set('newIssue','')
				}
		},
		current: true,
		newIssue: '',
		list: []
});
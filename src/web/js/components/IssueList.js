App.IssueListComponent = Ember.Component.extend({
		actions: {
				add: function() {
						var newAspect = this.get('newIssue')
						if( !newAspect.trim()) {return;}
						var store = this.get('targetObject.store');
						var issue = store.createRecord('issue', {
								name: newAspect,
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
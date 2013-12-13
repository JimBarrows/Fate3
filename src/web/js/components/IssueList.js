App.IssueListComponent = Ember.Component.extend({
		actions: {
				add: function() {
						var newAspect = this.get('newIssue')
						if( !newAspect.trim()) {return;}
						var store = this.get('targetObject.store');
						var current = this.get('current')
						var recordName = 'CurrentIssue'
						if( !current) {
								recordName="PendingIssue"
						}
						var issue = store.createRecord(recordName, {
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
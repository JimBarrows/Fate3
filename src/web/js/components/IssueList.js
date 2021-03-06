App.IssueListComponent = Ember.Component.extend({
		actions: {
				add: function() {
						var newAspect = this.get('newIssue')
						var list = this.get('list')
						var store =this.get('store')
						var recordName = this.get('recordName')
						var currentIssue = (recordName == 'currentIssue')
						if( !newAspect.trim()) {return;}
						
						var newRecord = store.createRecord(recordName, {
								name: newAspect,
								current: currentIssue,
								game: this.get('parent')
						})
						newRecord.save().then( function() {
								list.pushObject( newRecord)
						})

						this.set('newIssue','')
				}
		}
});
App.IssueListComponent = Ember.Component.extend({
		actions: {
				add: function() {
						var newAspect = this.get('newIssue')
						var list = this.get('list')
						var store =this.get('store')
						var recordName = this.get('recordName')
						if( !newAspect.trim()) {return;}
						
						var newRecord = store.createRecord(recordName, {
								name: newAspect
						})
						list.pushObject( newRecord)

						this.set('newIssue','')
				}
		}
});
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
						var name="pendingIssues"
						if( model.get('current')) {
								name="currentIssues"
						}
						game.get(name).removeObject(model)

						model.deleteRecord()
						model.save()
				}
		},
		isEditing: false
})


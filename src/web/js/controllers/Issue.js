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


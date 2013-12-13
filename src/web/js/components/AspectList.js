App.AspectListComponent = Ember.Component.extend({
		actions: {
				add: function() {
						var newAspect = this.get('aspect')
						if( !newAspect.trim()) {return;}
						var list = this.get('list')
						var store = this.get('targetObject.store')
						var newAspect = store.createRecord('aspect', {
								name: newAspect
						})
						list.pushObject( newAspect)
				}
		},
		aspect: '',
		list: []
});
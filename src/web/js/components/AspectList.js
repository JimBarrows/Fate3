App.AspectListComponent = Ember.Component.extend({
		actions: {
				add: function() {
						var newAspect = this.get('aspect')
						if( !newAspect.trim()) {return;}
						var list = this.get('list')
						var store = this.get('store')
						var parent = this.get('parent')
						var newAspect = store.createRecord(this.get('recordName'), {
								name: newAspect
								,game: parent
						})
						newAspect.save().then( function(){
								list.pushObject( newAspect)
						})
				}
		}
});
App.GameNewController =  Ember.ObjectController.extend({
		actions: {
				changeTab: function( newTab) {
						this.set('currentTab', newTab)
				},
				addFace: function() {
						var game = this.get('content')
						var newFace = this.store.createRecord( 'CharacterRecord', {
								name: this.get('newFaceName'),
								highConcept: this.get('newFaceHighConcept'),
								trouble: this.get('newFaceTrouble'),
								game: game
						})

						var faces = game.get('faces')
						
						faces.pushObject( newFace)

						this.set('newFaceName', '')
						this.set('newFaceHighConcept', '')
						this.set('newFaceTrouble', '')
				},
				save: function() {
						this.get('model').save()
				}
		},

		currentTab : 'issues',

		newFaceName: '',

		newFaceHighConcept: '',

		newFaceTrouble: '',

		isIssuesTab: function() { return this.get('currentTab') == 'issues'}.property('currentTab'),

		isFacesTab: function() { return this.get('currentTab') == 'faces'}.property('currentTab'),

		isPlacesTab: function() { return this.get('currentTab') == 'places'}.property('currentTab'),

		isDialsTab: function() { return this.get('currentTab') == 'dials'}.property('currentTab'),

		isSkillsTab: function() { return this.get('currentTab') == 'skills'}.property('currentTab'),

		isStuntsTab: function() { return this.get('currentTab') == 'stunts'}.property('currentTab'),

		isExtrasTab: function() { return this.get('currentTab') == 'extras'}.property('currentTab')

})



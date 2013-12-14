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
				deleteFace: function( face) {
						this.get('content').get('faces').removeObject( face)
						face.deleteRecord()
				},
				addPlace: function() {
						var game = this.get('content')
						var newPlace = this.store.createRecord( 'Place', {
								name: this.get('newPlaceName'),
								highConcept: this.get('newPlaceHighConcept'),
								trouble: this.get('newPlaaceTrouble'),
								game: game
						})

						var places = game.get('places')
						
						places.pushObject( newPlace)

						this.set('newPlaceName', '')
						this.set('newPlaceHighConcept', '')
						this.set('newPlaceTrouble', '')
				},
				deletePlace: function( place) {
						this.get('content').get('places').removeObject( place)
						place.deleteRecord()
				},
				addSkill: function() {
						var game = this.get('content')
						var newSkill = this.store.createRecord( 'SkillDescription', {
								name: this.get('newSkillName'),
								description: this.get('newSkillDescription'),
								createAdvantage: this.get('newCreateAdvantage'),
								overcome: this.get('newOvercome'),
								attack: this.get('newAttack'),
								defend: this.get('newDefend'),
								game: game
						})

						var skills = game.get('skills')
						
						skills.pushObject( newSkill)

						this.set('newSkillName', '')
						this.set('newSkillDescription', '')
						this.set('newCreateAdvantage', false)
						this.set('newOvercome', false)
						this.set('newAttack', false)
						this.set('newDefend', false)
				},
				deleteSkill: function( skill) {
						this.get('content').get('skills').removeObject( skill)
						skill.deleteRecord()
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



App.GameFormController =  Ember.ObjectController.extend({
		actions: {
				changeTab: function( newTab) {
						this.set('currentTab', newTab)
				},
				addFace: function() {
						var game = this.get('content')
						var newFace = this.store.createRecord( 'characterRecord', {
								name: this.get('newFaceName'),
								highConcept: this.get('newFaceHighConcept'),
								trouble: this.get('newFaceTrouble'),
								game: game
						})
						
						newFace.save().then( function() {
								
								var faces = game.get('faces')
						
								faces.pushObject( newFace)
						})

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
						var newPlace = this.store.createRecord( 'place', {
								name: this.get('newPlaceName'),
								highConcept: this.get('newPlaceHighConcept'),
								trouble: this.get('newPlaceTrouble'),
								game: game
						})

						newPlace.save().then( function() {
								var places = game.get('places')
						
								places.pushObject( newPlace)
						})


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
						var newSkill = this.store.createRecord( 'skillDescription', {
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
				addStunt: function() {
						var game = this.get('content')
						var newStunt = this.store.createRecord( 'stuntDescription', {
								name: this.get('newStuntName'),
								description: this.get('newStuntDescription'),
								game: game
						})

						var stunts = game.get('stunts')
						
						stunts.pushObject( newStunt)

						this.set('newStuntName', '')
						this.set('newStuntDescription', '')
				},
				deleteStunt: function( stunt) {
						this.get('content').get('stunts').removeObject( stunt)
						stunt.deleteRecord()
				},
				addExtra: function() {
						var game = this.get('content')
						var newExtra = this.store.createRecord( 'extraDescription', {
								name: this.get('newExtraName'),
								description: this.get('newExtraDescription'),
								permissions: this.get('newExtraPermissions'),
								costs: this.get('newExtraCosts'),
								costs: this.get('newExtraOvercome'),
								createAdvantage: this.get('newExtraCreateAdvantage'),
								attack: this.get('newExtraAttack'),
								defend: this.get('newExtraDefend'),
								game: game
						})

						var extras = game.get('extras')
						
						extras.pushObject( newExtra)

						this.set('newExtraName', '')
						this.set('newExtraDescription', '')
						this.set('newExtraPermissions', '')
						this.set('newExtraCosts', '')
						this.set('newExtraOvercome', '')
						this.set('newExtraCreateAnAdvantage', '')
						this.set('newExtraAttack', '')
						this.set('newExtraDefend', '')
				},
				deleteExtra: function( extra) {
						this.get('content').get('extras').removeObject( extra)
						extra.deleteRecord()
				},
				save: function() {
						var game = this.get('model')
						var dis = this 
						game.save().then( function( post) {
								dis.transitionToRoute('game.edit', post)
						})
																								
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

App.GameNewController = App.GameFormController.extend({
})

App.GameEditController = App.GameFormController.extend({
})

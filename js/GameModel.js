var Issue = Backbone.Model.extend({
		defaults: {
				name: 'Issue'
				,description: 'Explanation'
				,current: true
		}

		,isCurrent: function() {
				return current === true
		}

		,isFuture: function() {
				return current != true
		}
});

var IssueCollection = Backbone.Collection.extend({
		model: Issue
		,url: function() {return '/issues';}
});

var Place = Backbone.Model.extend({
		defaults: {
				name: 'Place'
				,description: 'Some place over the rainbow'
				,issues: []
				,aspects:[]
		}
		
		,initialize: function() {
				this.issues = new IssueCollection(this.get('issues'));
				this.aspects = new AspectCollection(this.get('aspects'));
		}
});

var PlaceCollection = Backbone.Collection.extend({
		model: Issue
		,url: function() {return '/places';}
});


var Game = Backbone.Model.extend({
		defaults: {
				name: 'Game Name'
				,setting: 'Setting/Scale'
				,issues: []
				,faces:  []   //characters
				,places: []
				,skillDescriptions: []
				,stuntDescriptions: []
				,extraDescriptions: []
				,numberOfAspects: 5
				,numberOfPhases: 3
				,skillCap: 4
				,skillOrganization: 'Pyramid'
				,numberOfColumns: 'n/a'
				,refreshRate: 3
				,numberOfInitialStunts: 3
				,typesOfStressTracks: 'Physical, Mental'
				,defaultNumberOfStressBoxes: 2
				,defaultConsequenceSlots: '2/4/6'
		}

		,initialize: function() {
				var self = this;
				this.issues = new IssueCollection(this.get('issues'));
				this.faces = new CharacterCollection(this.get('faces'));
				this.places = new PlaceCollection(this.get('places'));
		}

		/*Pass a collection to create the issue from */
		,addIssue: function( issue) {
				return this.issues.create( issue);
		}

		/*Pass a collection to create face ( a face is a character) from */
		,addFace: function( face) {
				return this.faces.create( face);
		}

		/*Pass a collection create place from */
		,addPlace: function( place) {
				return this.places.create(place);
		}

});

var GameCollection = Backbone.Collection.extend({
		model: Game
		,url: function() {return '/games';}
});
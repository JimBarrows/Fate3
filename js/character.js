var Skill = Backbone.Model.extend({
		defaults: {
				description: ''
				,rank:0
		}
});

var SkillCollection = Backbone.Collection.extend({
		model: Skill
		,url: function() {return '/skills';}
});


var Character = Backbone.Model.extend({
		defaults: {
				game: {}
				,name: 'Bob'
				,description: 'Big.  Blonde.  Dumb'
				,refresh: 0
				,aspects: []
				,skill: []
				,extras: []
				,stunts: []
				,stressTracks: []
				,consequences: []
		}

		,initialize: function() {
		}
});

var CharacterCollection = Backbone.Collection.extend({
		model: Character
		,url: function() {return '/characters';}
});
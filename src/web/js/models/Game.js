DS.JSONSerializer.reopen({
    serializeHasMany : function(record, json, relationship) {
        var key = relationship.key;

        var relationshipType = DS.RelationshipChange.determineRelationshipType(
                record.constructor, relationship);

        if (relationshipType === 'manyToNone'
                || relationshipType === 'manyToMany'
                || relationshipType === 'manyToOne') {
            json[key] = Ember.get(record, key).mapBy('id');
            // TODO support for polymorphic manyToNone and manyToMany
            // relationships
        }
    }
});

App.Game = DS.Model.extend({

		name: DS.attr('string'),
		setting: DS.attr('string'),
		numberOfAspects: DS.attr('number', {defaultValue: 5}),
		numberOfPhases: DS.attr('number', {defaultValue: 3}),
		skillCap: DS.attr('number', {defaultValue: 4}),
		numberOfColumns: DS.attr('number', {defaultValue: 0}),
		refreshRate: DS.attr('number', {defaultValue: 3}),
		numberOfInitialStunts: DS.attr('number', {defaultValue: 3}),
		defaultNumberOfStressBoxes: DS.attr('number', {defaultValue: 2}),
		defaultConsequenceSlots: DS.attr('string', {defaultValue: '2/4/6'}),
		skillPyramidOrColumns: DS.attr('string', {defaultValue: 'columns'}),
		currentIssues: DS.hasMany('currentIssue',{async:true}),
		pendingIssues: DS.hasMany('pendingIssue',{async:true}),
		faces: DS.hasMany('characterRecord'),
		places: DS.hasMany('place'),
		skills: DS.hasMany('skillDescription'),
		stunts: DS.hasMany('stuntDescription'),
		extras: DS.hasMany('extraDescription')
});

App.PendingIssue = DS.Model.extend({
		name: DS.attr('string'),
		current: DS.attr('boolean'),
		game: DS.belongsTo('game')
})

App.CurrentIssue = DS.Model.extend({
		name: DS.attr('string'),
		current: DS.attr('boolean'),
		game: DS.belongsTo('game')
})



App.Place = DS.Model.extend({
		name: DS.attr('string'),
		highConcept: DS.attr('string'),
		trouble: DS.attr('string'),
		aspects: DS.hasMany('aspect', {async:'true'}),
		game: DS.belongsTo('game')
})

App.SkillDescription = DS.Model.extend({
		name: DS.attr('string'),
		description: DS.attr('string'),
		overcome: DS.attr('boolean'),
		createAdvantage: DS.attr('boolean'),
		attack: DS.attr('boolean'),
		defend: DS.attr('boolean'),
		game: DS.belongsTo('game')
})

App.StuntDescription = DS.Model.extend({
		name: DS.attr('string'),
		description: DS.attr('string'),
		game: DS.belongsTo('game')
})

App.ExtraDescription = DS.Model.extend({
		name: DS.attr('string'),
		description: DS.attr('string'),
		permissions: DS.attr('string'),
		costs: DS.attr('string'),
		overcome: DS.attr('string'),
		createAnAdvantage: DS.attr('string'),
		attack: DS.attr('string'),
		defend: DS.attr('string'),
		game: DS.belongsTo('game')
})

App.Game.FIXTURES = [
		{ id: 1, name: "Game 1", setting: "setting 1",
			currentIssues: [1],
			pendingIssues: [2]}
]

App.CurrentIssue.FIXTURES=[{ id: 1, name:'ci 0', current:true, game: 1}]
App.PendingIssue.FIXTURES=[{ id: 2, name:'pi 0', current:false, game: 1}]
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
		currentIssues: DS.hasMany('CurrentIssue', {async:'true'}),
		pendingIssues: DS.hasMany('PendingIssue', {async:'true'}),
		faces: DS.hasMany('CharacterRecord', {async:'true'}),
		places: DS.hasMany('Place', {async:'true'}),
		skills: DS.hasMany('SkillDescription', {async:'true'})
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
		aspects: DS.hasMany('Aspect', {async:'true'}),
		game: DS.belongsTo('Game')
})

App.SkillDescription = DS.Model.extend({
		name: DS.attr('string'),
		description: DS.attr('string'),
		overcome: DS.attr('boolean'),
		createAdvantage: DS.attr('boolean'),
		attack: DS.attr('boolean'),
		defend: DS.attr('boolean'),
		game: DS.belongsTo('Game')
})

App.SkillDescription.FIXTURES = [
		{ id: 1, name: 'Athletics', description: 'Athletics description', 
			overcome: true, createAdvantage: true, attack: true, defend: true},
		{ id: 1, name: 'Burglary', description: 'Burglary description', 
			overcome: true, createAdvantage: true, attack: true, defend: true}
]
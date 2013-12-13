App.CharacterRecord = DS.Model.extend({
		name: DS.attr('string'),
		highConcept: DS.attr('string'),
		trouble: DS.attr('string'),
		aspects: DS.hasMany('Aspect', {async:'true'}),
		game: DS.belongsTo('Game')
});

App.Aspect = DS.Model.extend({
		name: DS.attr('string'),
		character: DS.belongsTo('CharacterRecord')
})
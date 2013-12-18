App.CharacterRecord = DS.Model.extend({
		name: DS.attr('string'),
		highConcept: DS.attr('string'),
		trouble: DS.attr('string'),
		aspects: DS.hasMany('aspect', {async:'true'}),
		game: DS.belongsTo('game')
});

App.Aspect = DS.Model.extend({
		name: DS.attr('string'),
		character: DS.belongsTo('characterRecord')
})
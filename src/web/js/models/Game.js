App.Game = DS.Model.extend({

		name: DS.attr('string'),
		setting: DS.attr('string'),
		currentIssues: DS.hasMany('CurrentIssue', {async:'true'}),
		pendingIssues: DS.hasMany('PendingIssue', {async:'true'}),
		faces: DS.hasMany('CharacterRecord', {async:'true'})
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

App.Game.FIXTURES= [
		{
				id     : 1,
				name   : "Test",
				setting: "None",
				issues : [ 1,2]
		}
]

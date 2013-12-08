App.Game = DS.Model.extend({

		name: DS.attr('string'),
		setting: DS.attr('string'),
		currentIssues: DS.hasMany('CurrentIssue', {async:'true'}),
		pendingIssues: DS.hasMany('PendingIssue', {async:'true'})
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

/*
App.ApplicationAdapter.map('get', {
		issues: {embedded: 'always'}
})
*/

App.Game.FIXTURES= [
		{
				id     : 1,
				name   : "Test",
				setting: "None",
				issues : [ 1,2]
		}
]

/*
App.Issue.FIXTURES= [
		{id: 1, name: "issue 1", current: true},
		{id: 2, name: "issue 2", current: false}
]
*/
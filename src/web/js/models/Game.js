App.Game = DS.Model.extend({

		name: DS.attr('string'),
		setting: DS.attr('string')
});

App.Game.FIXTURES= [
		{
				id: 1,
				name: "Test",
				setting: "None"
		}
]
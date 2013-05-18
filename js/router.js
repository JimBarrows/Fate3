var Router = Backbone.Router.extend({

		routes: {
				"" : "index"
				,"games" : "games"
				,"games/add" : "gamesAdd"
		}

		,index: function() {
				index.render();
		}

		,games: function() {
				index.showGameCollectionView();
		}

		,gamesAdd: function() {
				index.showGamesAddForm();
		}
});
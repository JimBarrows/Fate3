var Router = Backbone.Router.extend({

		routes: {
				"" : "index"
				,"games" : "games"
				,"games/add" : "gameAdd"
				,"games/:id" : "showGame"
		}

		,index: function() {
				index.render();
		}

		,games: function() {
				index.showGameCollectionView();
		}

		,gameAdd: function() {
				index.showGamesAddForm();
		}

		,showGame: function( id) {
				var game = index.gameCollection.get(id);
				index.showGameForm( game);
		}
});
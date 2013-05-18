var Router = Backbone.Router.extend({

		routes: {
				"" : "index"
				,"games" : "games"
		}

		,index: function() {
				index.render();
		}

		,games: function() {
				index.showGameCollectionView();
		}
});
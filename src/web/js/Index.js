var Index = Backbone.View.extend({
		el: $("body")
		,template: _.template( $("#index_view").html())
		,initialize: function(){
				var self = this;
				this.gameCollection = new GameCollection();
				this.gameCollection.fetch();

				vent.bind("game:show", function( cid) {
						if( cid) {
								var game = self.gameCollection.get(cid);
								router.navigate("/games/" + game.cid);
						} else {
								var game = self.gameCollection.create();
								router.navigate("/games/add");
						}
						self.showGameForm( game );
						
				});
				vent.bind("game:cancel", function() {
						self.showGameCollectionView();
						router.navigate("/games");
				});
				vent.bind("game:save", function(id) {
						self.gameCollection.fetch();
						self.showGameCollectionView();
						router.navigate("/games");
				});
				vent.bind("game:new", function( newGame) {
						self.gameCollection.fetch();
				})
/*
				this.gameCollection.fetch({
						error: function(collection, response) {
								alert("Error retrieving games " + response);
						}
				});
*/
		}

		,render: function() {
				$("#content").html( this.template());
				return this;
		}

		,showGameCollectionView: function() {
				this.showView( new GamesView({collection: this.gameCollection}));
				
		}

		,showGameForm: function( model) {
				this.showView( new GameForm({
						model: model
				}));
		}

		,showView: function(view) {
				if( this.currentView) {
						this.currentView.close();
				}
				this.currentView = view;
				this.currentView.render();
				$("#content").html(this.currentView.el);
		}
});
var Index = Backbone.View.extend({
		el: $("body")

		,initialize: function(){
				var self = this;
				this.gameCollection = new GameCollection([
						{name: 'Game 1'
						 ,setting: 'Setting 1'}
						,{name: 'Game 2'
							,setting: 'Setting 2'}
				]);

				vent.bind("game:show", function( cid) {
						if( cid) {
								var game = self.gameCollection.get(cid);
								router.navigate("/games/" + game.cid);
						} else {
								var game = new Game();
								router.navigate("/games/add");
						}
						self.showGameForm( game );
						
				});
				vent.bind("game:cancel", function() {
						self.showGameCollectionView();
						router.navigate("/games");
				});
				vent.bind("game:save", function(id) {
						self.showGameCollectionView();
						router.navigate("/games");
				});
				vent.bind("game:new", function( newGame) {
						self.gameCollection.add( newGame);
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
				var template = _.template( $("#index_view").html())
				$("#content").html( template());
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
var Index = Backbone.View.extend({
		el: $("body")

		,initialize: function(){
				var self = this;
				this.gameCollection = new GameCollection();
				this.gameCollection.fetch({
						error: function(collection, response) {
								alert("Error retrieving games " + response);
						}
				});
		}

		,render: function() {
				var template = _.template( $("#index_view").html())
				$("#content").html( template());
				return this;
		}

		,showGameCollectionView: function() {
				this.showView( new GamesView({collection: this.gameCollection}));
				
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
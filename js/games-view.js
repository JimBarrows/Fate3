var GamesView = Backbone.View.extend({

		el: $("#content")

		,collection: new GameCollection()

		,initialize: function() {
				this.listenTo( this.collection, 'add', this.render);
				this.listenTo( this.collection, 'remove', this.render);
				this.listenTo( this.collection, 'reset', this.render);
				this.listenTo( this.collection, 'sort', this.render);
				this.collection.fetch({
						error: function(collection, response) {
								alert("Error retrieving games " + response);
						}
				});
		}

		,events: {
				'click #add_game' : 'addGame'
		}

		,render: function() {
				var template = _.template( $("#games_view").html());
				$(this.el).html( template());
				return this;
		}

		,addGame: function( event) {
				var gameForm = new GameForm();
				gameForm.render();
		}
});
var GamesView = Backbone.View.extend({

		initialize: function() {
				this.listenTo( this.collection, 'add', this.render);
				this.listenTo( this.collection, 'remove', this.render);
				this.listenTo( this.collection, 'reset', this.render);
				this.listenTo( this.collection, 'sort', this.render);

		}

		,events: {
				'click #add_game' : 'addGame'
		}

		,render: function() {
				var template = _.template( $("#games_view").html());
				$(this.el).html( template({gameCollection: this.collection}));
				return this;
		}

		,addGame: function(e) {
				e.preventDefault();
		}

});
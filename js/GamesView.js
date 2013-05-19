var GamesView = Backbone.View.extend({

		initialize: function() {
				var self =this;
				this.listenTo( this.collection, 'add', this.render);
				this.listenTo( this.collection, 'remove', this.render);
				this.listenTo( this.collection, 'reset', this.render);
				this.listenTo( this.collection, 'sort', this.render);
		}

		,events: {
				'click #add_game' : 'addGame'
				,'click .gameRow' : 'editGame'
		}

		,render: function() {
				var template = _.template( $("#games_view").html());
				$(this.el).html( template({
						gameCollection: this.collection
				}));
				return this;
		}

		,addGame: function(e) {
				e.preventDefault();
				vent.trigger("game:show");
		}
		,editGame: function( e) {
				e.preventDefault();
				var cid = $(e.currentTarget).data("cid")
				vent.trigger("game:show", cid);
		}
});
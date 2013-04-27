var GameForm = Backbone.View.extend({

		el: $("#content")

		,model: new Game()

		,initialize: function() {
				this.listenTo( this.model, 'change', this.render);
		}

		,render: function() {
				var template = _.template( $("#game_form").html())
				$(this.el).html( template());
				return this;
		}
});
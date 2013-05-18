var GameForm = Backbone.View.extend({

		el: $("#content")

		,model: new Game()

		,events: {
				'change input[name=name]' : "textChange"
				,'change input[name=setting]' : "textChange"
		}

		,initialize: function() {
				this.listenTo( this.model, 'change', this.render);
		}

		,render: function() {
				var template = _.template( $("#game_form").html())
				$(this.el).html( template({game: this.model}));
				return this;
		}

		,textChange: function( event) {
				var change={};
				change[event.target.name] = event.target.value;
				this.model.set( change);
		}
});
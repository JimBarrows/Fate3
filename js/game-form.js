var GameForm = Backbone.View.extend({

		events: {
				'change input[name=name]' : "textChange"
				,'change input[name=setting]' : "textChange"
				,'click .save' : 'save'
				,'click .cancel' : 'cancel'
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

		,save: function( event) {
				event.preventDefault();
				var self = this;
				this.model.save(this.model.changedAttributes(), {
						success: function(model, response, options){
								vent.trigger("game:save", self.model.id);
								AlertView.msg(self.$el, {
										alert:'info'
										,msg: "Game " + self.model.get('name') + "saved"
								});
						}
						,error: function(model, xhr, options) {
								AlertView.msg(self.$(".error"), {
										alert:'error'
										,msg: "Game " + self.model.get('name') + "could not be saved.   "+ xhr.response
								});
						}
				});
		}

		,cancel: function( event) {
				if( this.model.hasChanged()) {
						this.model.set( this.model.previousAttributes());
				}
				vent.trigger("game:cancel", this.model.id);
				event.preventDefault();
		}
});
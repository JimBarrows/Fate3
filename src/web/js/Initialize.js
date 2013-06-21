$(function() {
		Backbone.View.prototype.close = function() {
				this.remove();
				this.unbind();
				this.stopListening();
				if( this.onClose) {
						this.onClose();
				}
		}
		vent = _.extend({}, Backbone.Events);
		index = new Index();
		index.render();
		router = new Router();
		Backbone.history.start();
});
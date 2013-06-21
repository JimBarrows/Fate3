var AlertView = Backbone.View.extend({
		className: 'alert fade in',
		alerts: ['success', 'error', 'info'],
		template: _.template([
				'<button class="close" data-dismiss="alert">&times;</button>',
				'<%= message %>'
		].join('')),

		initialize: function(options) {
				var message = options.msg || '';
				var alert = options.hasOwnProperty('alert') ? options.alert : 'info';
				
				if(_.indexOf(this.alerts, alert) === -1) {
						throw new Error('Invalid alert: [' + alert + '] Must be one of: ' + this.alerts.join(', '));
				}

				this.alert = alert;
				this.message = message;
		},
		render: function() {
				var output = this.template({ message: this.message });
				this.$el.addClass('alert-' + this.alert).html(output).alert();
				return this;
		}
});

AlertView.msg = function($el, options) {
	var alert = new AlertView(options);
	$el.html(alert.render().el);
	return alert;
};
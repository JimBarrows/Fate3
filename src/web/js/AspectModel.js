var Aspect = Backbone.Model.extend({
		defaults: {
				name: 'Aspect'
				,description: 'Explanation'
		}
});

var AspectCollection = Backbone.Collection.extend({
		model: Aspect
		,url: function() {return '/aspects';}
});


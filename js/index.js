var Index = Backbone.View.extend({
		el: $("body")

		,gameCollectionView: new GamesView()

		,initialize: function(){
				var self = this;

		}

		,render: function() {
				var template = _.template( $("#index_view").html())
				$("#content").html( template());
				return this;
		}
});
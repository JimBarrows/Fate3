var IssueView = Backbone.View.extend({


		initialize: function() {
				this.listenTo( this.model, 'change', this.render);
				this.template = _.template( $("#issue_view").html())
		}

		,render: function() {
				$(this.el).html( this.template( {model: this.model}));
				return this;
		}
});

var IssueCollectionView = Backbone.View.extend({

		initialize: function() {
				var self = this;

				this.issueViews = [];

				this.listenTo( this.collection, 'add', this.render);
				this.listenTo( this.collection, 'remove', this.render);
				this.listenTo( this.collection, 'reset', this.render);
				this.listenTo( this.collection, 'sort', this.render);

				this.collection.each( function (issue) {
						self.issueViews.push( new IssueView({
								model: issue
								,tagName: 'div'
						}));
				});
		}

		,render: function() {
				var self = this;
				$(this.el).empty();
				_(this.issueViews).each(function( issueView) {
						$(self.el).append(issueView.render().el);
				});
		}
});
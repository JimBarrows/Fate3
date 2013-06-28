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

var IssueView = Backbone.View.extend({
		tagName: "li"
		,template: _.template($("#issue_view").html())
		,events: {
				"dblclick .view"  : "edit",
				"click a.destroy" : "clear",
				"keypress .edit"  : "updateOnEnter",
				"blur .edit"      : "close"
		}
		,initialize: function() {
				this.listenTo(this.model, "change", this.render);
				this.listenTo(this.model, "destroy", this.close);
		}
		,render: function() {
				this.$el.html(this.template(this.model.toJSON()));
				this.$el.toggleClass('done', this.model.get('done'));
				this.input = this.$('.edit');
				return this;
    }
		,edit: function() {
				this.$el.addClass("editing");
				this.input.focus();
		}
		,close: function() {
				var value = this.input.val();
				if (!value) {
						this.clear();
				} else {
						this.model.save({title: value});
						this.$el.removeClass("editing");
				}
    }
		,updateOnEnter: function(e) {
      if (e.keyCode == 13) this.close();
    }
		,clear: function() {
      this.model.destroy();
    }
});

var IssueListView = Backbone.View.extend({
		events: {
				"keypress .newIssue" : "createOnEnter"
		}

		,initialize: function() {
				this.input = this.$(".newIssue");
				this.listenTo(this.collection, 'add', this.addOne);
				this.listenTo(this.collection, 'reset', this.addAll);
				this.listenTo(this.collection, 'all', this.render);
		}
		,render: function() {
				var template = _.template( $("#issue_view").html())
				$(this.el).html( template());
				return this;
		}
		,addOne: function(todo) {
				var view = new TodoView({model: todo});
				this.$("#todo-list").append(view.render().el);
    }
		,createOnEnter: function(e) {
				if (e.keyCode != 13) return;
				if (!this.input.val()) return;
				
				Todos.create({title: this.input.val()});
				this.input.val('');
    }
});

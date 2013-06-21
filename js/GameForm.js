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

var GameForm = Backbone.View.extend({

		events: {
				'change input[name=name]' : "textChange"
				,'change input[name=setting]' : "textChange"
				,'click .save' : 'save'
				,'click .cancel' : 'cancel'
		}

		,initialize: function() {
				this.listenTo( this.model, 'change', this.render);
				this.currentIssues = new IssueListView({
						collection: this.model.get('currentIssues')
				});
				this.pendingIssues = new IssueListView({
						collection: this.model.get('impendingIssues')
				});
		}

		,render: function() {
				var template = _.template( $("#game_form").html())
				$(this.el).html( template({game: this.model}));
				this.currentIssues.render();
				this.$("#currentIssues").html( this.currentIssues.el);
				this.pendingIssues.render();
				this.$("#pendingIssues").html( this.pendingIssues.el);
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
				if( this.model.isNew()) {
						vent.trigger("game:new", this.model);
				}
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
										,msg: "Game " + self.model.get('name') + "could not be saved.   "
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
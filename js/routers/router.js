var Router = Backbone.Router.extend({
	routes : {
		"/" : "quizPage",
		"result" : "quizResult"
	},
	quizPage : function() {
		this.loadView(new App.Views.Quiz());
	},
	quizResult : function() {
		this.loadView(new App.Views.Result());
	},
	loadView : function(view) {
		this.view && this.view.remove();
		this.view = view;
	}
});

define(["userAnswerCollection", "formModel", "formView", "quizView", "resultView", "util"],
    function (UserAnswerCollection, DataFormModel, DataFormView, QuizView, ResultView, Util) {
        debugger;
        window.App = Util.Util.GetApp();
        App.Routers.AppRouter = Backbone.Router.extend({
        routes : {
            "" : "quizPage",
            "result" : "quizResult"
        },
        initialize: function(){
			debugger;
            //var userAnswersList = new UserAnswerCollection();
            //userAnswersList.fetch({error: function(m){ alert(m) }});
        }
        ,
        quizPage : function() {
            var FormModel = new DataFormModel();
            var FormView = new DataFormView({ model: FormModel, model2: quiz });
            $('#content-form').html(FormView.render().el);
            this.loadView(new QuizView({ collection: quiz }), true);
        },
        quizResult : function() {           
            this.loadView(new ResultView(), false);
        },
        loadView : function(view, showForm) {
            if(showForm)
            {
                $('#content-form').css('display','block');
            }
            else
            {
                $('#content-form').css('display','none');
            }
            $('#content-body').html(view.render().el);
        }
    });
});

  

define([],
    function () {
        debugger;
        window.App = GetApp();
        App.Routers.AppRouter = Backbone.Router.extend({
        routes : {
            "" : "quizPage",
            "result" : "quizResult"
        },
        initialize: function(){
            var userAnswersList = userAnswersList || new App.Collections.UserAnswer();
            userAnswersList.fetch({error: function(m){ alert(m) }});
        }
        ,
        quizPage : function() {
            var FormModel = new App.Models.DataForm();
            var FormView = new App.Views.DataForm({ model: FormModel, model2: quiz });
            $('#content-form').html(FormView.render().el);
            this.loadView(new App.Views.Quiz({ collection: quiz }), true);
        },
        quizResult : function() {           
            this.loadView(new App.Views.Result(), false);
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
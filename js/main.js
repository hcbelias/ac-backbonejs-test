
(function() {

    window.App = window.App || {
        Models: {},
        Collections: {},
        Views: {}
    };




    var QuizView = new App.Views.Quiz({ collection: quiz });

    $(document.body).append(QuizView.render().el);  
})();
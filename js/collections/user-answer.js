(function() {

    window.App = window.App || {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {}
    };

    App.Collections.UserAnswer = Backbone.Collection.extend({
        model: App.Models.UserAnswer,
        localStorage: new Backbone.LocalStorage("quizz-ac-"),
        sync: function(method, model, options){
            options || (options = {});
            var key = "quizz-ac-" + model.get('UserName');
            switch(method){
                case 'read':
                {
                    userAnswersList._reset();
                    for (var key in localStorage){
                        var jsonData = localStorage.getItem(key);
                        var userAnswer = new App.Models.UserAnswer();
                        userAnswer = jQuery.parseJSON(jsonData);
                        userAnswersList.add(userAnswer);
                    }
                }
                break;
            }
        }
    });


})();

var userAnswersList = userAnswersList || new App.Collections.UserAnswer();
(function() {

	window.App = window.App || {
        Models: {},
        Collections: {},
        Views: {}
    };

    App.Collections.UserAnswer = Backbone.Collection.extend({
        model: App.Models.UserAnswer,
        localStorage: new Backbone.LocalStorage("quizz-ac-")
    });

})();

var userAnswersList = userAnswersList || new App.Collections.UserAnswer();
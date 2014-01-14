(function() {

    window.App = window.App || {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {}
    };

    App.Models.Answer = Backbone.Model.extend({
        defaults: {
            CorrectAnswer: 'None',
            Answer: 'None',
            QuestionId: 0
        },

        isCorrectAnswer: function() {        
            var answer = this.Answer;
            var correctAnswer = this.CorrectAnswer;
            return answer == correctAnswer;
        }
    });

})();
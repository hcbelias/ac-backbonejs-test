(function() {

    window.App = window.App || {
        Models: {},
        Collections: {},
        Views: {}
    };

    App.Models.Answer = Backbone.Model.extend({
        defaults: {
            CorrectAnswer: 'None',
            Answer: 'None',
            QuestionId: 0
        },

        isCorrectAnswer: function() {        
            var answer = this.get('Answer');
            var correctAnswer = this.get('CorrectAnswer');
            return answer == correctAnswer;
        }
    });

})();
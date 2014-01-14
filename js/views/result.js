(function() {
    App.Views.Result = Backbone.View.extend({    
        tagName: 'div',

        template: template('resultTemplate'),

        className: 'quiz-result',

        render: function() {
            this.loadData();
            return this;
        },

        loadData: function(){
            debugger;
            userAnswersList.fetch();
            this.model.set('UserAnswer', userAnswersList);
            var quizModel = this.model.get('Quiz');
            debugger;
            $(quizModel.models).each(function(){
                debugger;


            });
        }
    });

})();

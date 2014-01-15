(function() {
    App.Views.Result = Backbone.View.extend({    
        tagName: 'div',

        template: template('resultTemplate'),

        className: 'quiz-template',

        render: function() {
            return this.loadData();
        },

        loadData: function(){
            this.printAnswers();
            return this;
        },
        printAnswers:function(){
            this.$el.append("<div class=\"quiz-main-title\">Answers</div>");
            for (var i = 0; i < quiz.models.length; i++) { 
                var iterator = quiz.models[i];
                 var questionModel = new App.Models.Question({ 
                    Question : iterator.attributes.Question, 
                    CorrectAnswer : iterator.attributes.CorrectAnswer,
                    Id: iterator.attributes.Id
                });

                var questionView = new App.Views.Question({ 
                     model: questionModel
                 }).render();               

                this.$el.append(questionView.$el);
                this.$el.append(iterator.attributes.CorrectAnswer);
            }   
        }
    });

})();

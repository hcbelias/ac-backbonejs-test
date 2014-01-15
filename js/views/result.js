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
            //Iterates in each question from the quiz
            for (var i = 0; i < quiz.models.length; i++) { 
                var modelIterator = quiz.models[i];
                 var questionModel = new App.Models.Question({ 
                    Question : modelIterator.attributes.Question, 
                    CorrectAnswer : modelIterator.attributes.CorrectAnswer,
                    Id: modelIterator.attributes.Id
                });
                this.$el.append(modelIterator.attributes.CorrectAnswer);
                var questionView = new App.Views.Question({ 
                     model: questionModel
                 }).render();               
                this.$el.append(questionView.$el);
                var questionDictionary = {};
                //Iterates in each answer quiz to create dictionary
                for (var j = 0; j < modelIterator.attributes.Answer.length; j++) {
                    var answerIterator = modelIterator.attributes.Answer[j];                    
                    questionDictionary[answerIterator.Answer] = 0;
                }
                // //Iterates in each user's answers frmco the question to create dictionary
                //     if(modelIterator.attributes.Id == userAnswersIterator.QuestionId && 
                //         modelIterator.attributes.Answer[j].Answer == 
                //         userAnswersList.models[i].attributes.AnswerList[1].Answer)
                //     {
                //         debugger;
                //        questionDictionary[modelIterator.attributes.Answer[j].Answer]++;
                //     }
                // }
            debugger;
                for (var j = 0; j < userAnswersList[i].attributes.models.length; j++) {
                    
                    var answerIterator = userAnswersList.models[j];
                    debugger;
                    //var answerCalculateduserAnswersList.models[0].attributes.AnswerList[1].Answer
                }
                debugger;
            }   
        }
    });

})();

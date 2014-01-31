define(["backbone", "util", "questionModel", "questionView"],
    function (Backbone, Util, QuestionModel, QuestionView) {

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
                var countTotal = 0;
                var modelIterator = quiz.models[i];
                var questionModel = new QuestionModel({ 
                    Question : modelIterator.attributes.Question, 
                    CorrectAnswer : modelIterator.attributes.CorrectAnswer,
                    Id: modelIterator.attributes.Id
                });
                
                var questionView = new QuestionView({ 
                    model: questionModel
                }).render();               
                this.$el.append(questionView.$el);
                this.$el.append("<div class=\"quiz-template\">Answer: " + modelIterator.attributes.CorrectAnswer + "</div>");
                var questionDictionary = {};

                for (var j = 0; j < modelIterator.attributes.Answer.length; j++) {
                    var answerIterator = modelIterator.attributes.Answer[j];                    
                    questionDictionary[answerIterator.Answer] = 0;
                }

                for (var j = 0; j < userAnswersList.length; j++) {
                    var userAnswerIterator = userAnswersList.models[j];

                    for (var k = 0; k < userAnswerIterator.attributes.AnswerList.length; k++) {
                        var iterator = userAnswerIterator.attributes.AnswerList[k];
                        if(iterator.QuestionId == modelIterator.get('Id'))
                        {
                            countTotal++;
                            questionDictionary[iterator.Answer]++;
                        }
                    }
                }
                for(var key in questionDictionary)
                {
                    var percentageValue = 100 * questionDictionary[key] / countTotal;
                    this.$el.append(key+": "+percentageValue.toFixed(2) +" %<br/>");
                }
                this.$el.append("<br/>");
            }   
        }
    });

});

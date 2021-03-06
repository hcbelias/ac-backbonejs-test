(function() {
    window.App = window.App || {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {}
    };


    App.Views.DataForm = Backbone.View.extend({
        tagName: 'div',
        className: 'data-form',
        template: template('formTemplate'),
        initialize: function() {
            _.bindAll(this, 'updateModel');
            this.render();
        },
        render: function() {
            this.$el.html(this.template(this.model));
            return this;
        },
        events: {
            'click button' : 'submitForm',
            'keyup .form-user-entry':  'updateModel',
        },
        updateModel: function(e) {
            debugger;
            var $el = $(e.target);
            this.model[$el.data('model')] = $el.val();
        },
        submitForm: function(){
            
            if(this.validateForm())
            {
                var userAnswer = new App.Models.UserAnswer();
                userAnswer.set('UserName', this.model.UserName);
                userAnswer.set('UserEmail', this.model.UserEmail);  
                var answerList = $('.selectedAnswer').map(function() { 
                    var questionAnswer = $(this).text().trim();
                    var questionId = $(this).attr('name').split('_')[1];
                    var modelQuiz = quiz.models[questionId-1].attributes;
                    var modelAnswer = new App.Models.Answer();
                    modelAnswer.set('CorrectAnswer', modelQuiz.CorrectAnswer);
                    modelAnswer.set('Answer', questionAnswer);
                    modelAnswer.set('QuestionId', questionId);
                    return modelAnswer;
                }).get();    
                userAnswer.set('AnswerList', answerList);
                userAnswersList.add(userAnswer);
                userAnswer.save();
                var router = new App.Routers.AppRouter();
                router.navigate('result', {trigger: true});
                return true;
            }
            else
            {
                return false;
            }
        },
        validateForm: function(){
            var success = true;
            var errorMessage = "";
            if(!this.model.validateUserName())
            {
                success = false;
                errorMessage = "User name is required.\n";
            }

            if(!this.model.validateUserEmail())
            {
                success = false;
                errorMessage = "User email is required.\n";
            }
            
            if(success)
            {
               $('.question').each(function(index, value){
                    

                    success = $(this).find('.selectedAnswer').length > 0;
                    if(!success)
                    {
                        if(errorMessage == "")
                        {
                            errorMessage += "All questions must be answered.\n"    
                        }
                        errorMessage += "Question: "+$(this).find('.question-title').text()+"\n";
                    }
                });
            }

            if(!success)
            {
                alert(errorMessage);
                return success;
            }            
            return success;
        }
    });
})();


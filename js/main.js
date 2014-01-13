
(function() {

    window.App = window.App || {
        Models: {},
        Collections: {},
        Views: {}
    };
    var QuizView = new App.Views.Quiz({ collection: quiz });

    $('#content-body').html(QuizView.render().el);    

})();

function onClickAnswerCheckbox (elementClicked)
{
    elementClicked.parent().parent().find('input:checkbox').removeAttr('checked');
    elementClicked.attr('checked', 'checked');
}

function onClickSubmitResultButton(buttonClicked)
{
    var error = false;
    var errorMessage = "It is required to answer all questions.\n";

    var userName =$('#user-name').val();
    var userEmail =$('#user-email').val();

    if(!validateUserName(userName))
    {
        var userNameErrorMessage = "User name is required.\n";
        alert(userNameErrorMessage);
        return false;
    }

    if(!validateUserEmail(userEmail))
    {
        var userEmailErrorMessage = "User email is required.\n";
        alert(userEmailErrorMessage);
        return false;
    }

    $('.question').each(function(index, value){
        error = !validateQuestionAnswer($(this));
        if(error)
        {
            errorMessage += "Question: "+$(this).find('.question-title').text()+"\n";
        }
    });

    if(error)
    {
        alert(errorMessage);
        return false;
    }
    else
    {
        submitResult(userName, userEmail);        
    }

}

function submitResult(userName, userEmail)
{
    
    
    var userAnswer = new App.Models.UserAnswer();
    userAnswer.set('UserName', userName);
    userAnswer.set('UserEmail', userEmail);
    
    
    var answerList = $('input:checkbox:checked').map(function() { 
        
        var questionAnswer = $(this).attr('id').split('_')[1]
        var questionId = $(this).attr('id').split('_')[0];
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
    
    return true;
}

function validateUserName(name)
{
    return name != null && name.length > 0;
}

function validateUserEmail(email)
{
    return email != null && email.length > 0;
}

function validateQuestionAnswer(questionElement)
{
    if(questionElement.find('input:checkbox:checked').length > 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
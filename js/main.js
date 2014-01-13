
(function() {

    window.App = window.App || {
        Models: {},
        Collections: {},
        Views: {}
    };
	
	debugger;
	var answersList = new App.Collection.Answer();
	answersList.fetch();
	
	
    var QuizView = new App.Views.Quiz({ collection: quiz });

    $('#content-body').html(QuizView.render().el);    

})();

function onClickAnswerCheckbox (elementClicked)
{
    elementClicked.parent().parent().find('input:checkbox').removeAttr('checked')
    elementClicked.attr('checked', 'checked');
}

function onClickSubmitResultButton(buttonClicked)
{
    debugger;
    var error = false;
    var errorMessage = "It is required to answer all questions.\n";
    $('.question').each(function(index, value){
        debugger;
        error = !validateQuestionAnswer($(this));
        if(error)
        {
            errorMessage += "Question: "+$(this).find('.question-title').text()+"\n";
        }
    });
       debugger;
    if(error)
    {
        alert(errorMessage);
        return false;
    }
    else{
        //TODO: Persist Data and RedirectPage
        return true;
    }


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
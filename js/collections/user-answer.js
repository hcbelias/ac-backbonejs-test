define(["backbone", "localStorage", "userAnswerModel"],
    function (Backbone, LocalStorage, UserAnswerModel) {

debugger;
    App.Collections.UserAnswer = Backbone.Collection.extend({
        model: UserAnswerModel,
        localStorage: new LocalStorage("quizz-ac-"),
        sync: function(method, model, options){
            options || (options = {});
            var key = "quizz-ac-" + model.get('UserName');
            switch(method){
                case 'read':
                {
                    userAnswersList._reset();
                    for (var key in localStorage){
                        var jsonData = localStorage.getItem(key);
                        var userAnswer = new UserAnswerModel();
                        userAnswer = jQuery.parseJSON(jsonData);
                        userAnswersList.add(userAnswer);
                    }
                }
                break;
            }
        }
    });

	var userAnswersList = userAnswersList || new App.Collections.UserAnswer();
});


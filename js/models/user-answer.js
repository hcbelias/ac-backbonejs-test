define(["backbone"],
    function (Backbone) {

    App.Models.UserAnswer = Backbone.Model.extend({
        sync: function(method, model, options){
            options || (options = {});
            var key = "quizz-ac-" + model.get('UserName');
            switch(method){
                case 'create':
                    localStorage.setItem(key, JSON.stringify(model));
                break;
                case 'read':
					debugger;
                    var result = localStorage.getItem(key);
                    if (result){
                        result = JSON.parse(result);
                        options.success && options.success(result);
                    }
                    else if (options.error){
                        options.error("Couldn't find LocalStorage Key: " + key);
                    }
                break;
                case 'update':
                break;
                case 'delete':
                break;
            }
        },
        defaults: {
            UserName: 'None',
            UserEmail: 'None',
            AnswerList: []
        }
    });

});

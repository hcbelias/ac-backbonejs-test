requirejs.config({
    
    baseUrl: 'js/',
    paths: {
        "main": "main",
        "jquery": "libs/jquery/jquery",
        "underscore": "libs/underscore/underscore",
        "backbone": "libs/backbone/backbone",
        "localStorage": "libs/backbone/backbone.localStorage",
        "bootstrap": "libs/bootstrap/bootstrap.min",
        "questionModel": "models/question",
        "answerModel": "models/answer",
        "userAnswerModel": "models/user-answer",
        "formModel": "models/form",
        "resultModel": "models/result",
        "quizCollection": "collections/quiz",
        "userAnswerCollection": "collections/user-answer",
        "utilView": "views/view-util",
        "quizView": "views/quiz",
        "questionView": "views/question",
        "answerView": "views/answer",
        "resultView": "views/result",
        "formView": "views/form",
        "router": "routers/router",
        "util": "util",
    },
    shim: {
        "underscore": {
            deps: [],
            exports: "_"
        },
        "backbone": {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },
        "bootstrap": {
            deps: ["jquery"],
            exports: "Bootstrap"
        }
        ,
        "router": {
            deps: ["backbone"],
            exports: "router"
        }
        
    }    
    
});

define(["jquery", "util", "underscore", "backbone", "router"],
    function ($, util, _, backbone, router) {
        debugger;
        window.App = GetApp(); 
        var router = new App.Routers.AppRouter();
        Backbone.history.start();
});

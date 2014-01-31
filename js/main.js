requirejs.config({
    
    baseUrl: 'js/',
    paths: {
		"answerModel": "models/answer",
		"answerView": "views/answer",
		"backbone": "libs/backbone/backbone",
		"bootstrap": "libs/bootstrap/bootstrap.min",
		"formModel": "models/form",
		"formView": "views/form",
        "jquery": "libs/jquery/jquery",               
        "localStorage": "libs/backbone/backbone.localStorage",
        "main": "main",
        "questionModel": "models/question",
		"questionView": "views/question",
        "quizCollection": "collections/quiz",
		"quizView": "views/quiz",
		"resultModel": "models/result",
		"resultView": "views/result",
		"router": "routers/router",
		"underscore": "libs/underscore/underscore",
        "userAnswerCollection": "collections/user-answer",
		"userAnswerModel": "models/user-answer",
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

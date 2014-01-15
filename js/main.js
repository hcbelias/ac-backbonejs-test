requirejs.config({
    enforceDefine: true,
    baseUrl: 'js/',
    paths: {
        "app": 'main',
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
        },
        "localStorage": {
            deps: ["jquery", "underscore", "backbone"],
            exports: "Backbone.localStorage"
        },
        "app": {
            deps: ["jquery", "underscore", "backbone", "localStorage"],
            exports: "Backbone.localStorage"
        },
        
    }    
    
});



require(["jquery", "underscore", "backbone"],
    function ($, _, Backbone) {
        debugger;
        console.log("Test output");
        console.log("$: " + typeof $);
        console.log("_: " + typeof _);
        console.log("Backbone: " + typeof Backbone);

        window.App = window.App || {
            Models: {},
            Collections: {},
            Views: {},
            Routers: {}
        };

        var router = new App.Routers.AppRouter();
        Backbone.history.start();
});

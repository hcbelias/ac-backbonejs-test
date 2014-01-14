(function() {

	window.App = window.App || {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {}
    };

    App.Models.Question = Backbone.Model.extend({
        defaults: {
            Id: 0,
            Answer: [],
            CorrectAnswer: 'None',
            Question: 'None'
        }
    });

})();
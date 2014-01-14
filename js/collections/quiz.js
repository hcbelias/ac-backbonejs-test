(function() {

	window.App = window.App || {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {}
    };

    App.Collections.Quiz = Backbone.Collection.extend({
        model: App.Models.Question
    });

})();
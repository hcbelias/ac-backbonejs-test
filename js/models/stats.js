(function() {

    window.App = window.App || {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {}
    };

    App.Models.Stats = Backbone.Model.extend({
        defaults: {
            Value: []
            Answer: []
        }
    });

})();
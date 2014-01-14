(function() {

    window.App = window.App || {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {}
    };

    App.Models.Result = Backbone.Model.extend({
        defaults: {
            Answer: {}
        }
    });

})();
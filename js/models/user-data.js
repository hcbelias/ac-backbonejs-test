(function() {

    window.App = window.App || {
        Models: {},
        Collections: {},
        Views: {}
    };

    App.Models.User = Backbone.Model.extend({
        defaults: {
            Name: 'None',
            Email: 'None'
        }
    });

})();
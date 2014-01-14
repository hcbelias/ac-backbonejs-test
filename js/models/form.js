(function() {

    window.App = window.App || {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {}
    };

    App.Models.DataForm = Backbone.Model.extend({
        defaults: {
            UserName: 'None',
            UserEmail: 'None'
        },

        isValid: function() {        
            return validateUserName() && validateUserEmail();
        },

        validateUserName: function ()
        {
            return this.UserName != null && this.UserName.length > 0;
        },

        validateUserEmail: function ()
        {
            return this.UserEmail != null && this.UserEmail.length > 0;
        }

    });

})();
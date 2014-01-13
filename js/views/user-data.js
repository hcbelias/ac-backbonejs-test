(function() {
	window.App = window.App || {
        Models: {},
        Collections: {},
        Views: {}
    };


    App.Views.User = Backbone.View.extend({
        tagName: 'div',

        className: 'user-data',

        template: template('personalDataTemplate'),

        initialize: function() {
            
            this.render();
        },

        render: function() {
            this.$el.html( this.template(this.model));
        }
    });
})();


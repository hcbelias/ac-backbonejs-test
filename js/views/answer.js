(function() {
	window.App = window.App || {
        Models: {},
        Collections: {},
        Views: {}
    };


    App.Views.Answer = Backbone.View.extend({
        tagName: 'li',

        className: 'answer',

        template: template('answerTemplate'),

        initialize: function() {
            
            this.render();
        },

        render: function() {
            this.$el.html( this.template(this.model));
        },

        
    });
})();


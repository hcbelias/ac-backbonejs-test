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
        }
        ,
        events: {
            'click' : 'showAlert'

        },

        showAlert: function(){
            if(this.model.attributes.Answer == this.model.attributes.CorrectAnswer)
            {
                alert("Right Answer");
            }
            else{
                alert("Wrong Answer!");   
            }
        }
    });
})();
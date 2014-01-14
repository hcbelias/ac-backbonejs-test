(function() {
	window.App = window.App || {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {}
    };


    App.Views.Answer = Backbone.View.extend({
        tagName: 'li',

        className: 'answer',

        template: template('answerTemplate'),

        initialize: function() {
            this.on('answer:selected', this.emptyAnswerSiblings, this);
            this.render();
        },

        render: function() {
            this.$el.html( this.template(this.model));
            this.$el.attr('name', "question_" + this.model.attributes.QuestionId);
        },

        events: {
            'click' : 'selectAnswer'
        },
        selectAnswer: function(){
            if(this.$el.hasClass('selectedAnswer'))
            {
                this.$el.removeClass('selectedAnswer');
            }
            else
            {
                this.$el.addClass('selectedAnswer');
            }
            this.trigger('answer:selected');
        },
        emptyAnswerSiblings: function() {
            this.$el.siblings().removeClass('selectedAnswer');
        }

        
    });
})();


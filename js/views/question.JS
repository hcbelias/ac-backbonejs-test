(function() {
    App.Views.Question = Backbone.View.extend({
        tagName: 'li',

        template: template('questionTemplate'),

        render: function() {

            this.$el.html( this.template(this.model.toJSON()));
            this.$el.append("<ul class='answer-list'>");
            for (var i = 0; i < this.model.attributes.Answer.length; i++) { 
                    
                var answerModel = new App.Models.Answer({ 
                    Answer : this.model.attributes.Answer[i]['Answer'], 
                    CorrectAnswer : this.model.attributes.CorrectAnswer
                });

                var viewAnswer = new App.Views.Answer({ 
                     model: answerModel
                 });

                this.$el.append(viewAnswer.$el);
            }
            this.$el.append("</ul>");
            return this;
        }
    });
})();
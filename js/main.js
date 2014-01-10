(function() {

window.App = {
    Models: {},
    Collections: {},
    Views: {}
};

window.template = function(id) {
    return _.template( $('#' + id).html() );
};



App.Models.Question = Backbone.Model.extend({
	defaults: {
		Id: 0,
		Answer: { },
		CorrectAnswer: 'None',
		Question: 'None'
	},

	getCorrectAnswer: function() {        
		var answerList = this.get('Answer');
		var correctAnswer = answerList.get(this.get('CorrectAnswer'));
		return correctAnswer;
	}
});

App.Collections.Quiz = Backbone.Collection.extend({
    model: App.Models.Question
});

App.Views.Question = Backbone.View.extend({
    tagName: 'li',
    
    template: template('questionTemplate'),

	render: function() {
        
        this.$el.html( this.template(this.model.toJSON()));
        this.$el.append("<ul class='answer-list'>");
        for (var i = 0; i < this.model.attributes.Answer.length; i++) { 
            var view = new App.Views.Answer({ model: this.model.attributes.Answer[i] });
            this.$el.append(view.$el);
        }
        this.$el.append("</ul>");
        return this;
	}
});

App.Views.Quiz = Backbone.View.extend({    
    tagName: 'ul',

    className: 'quiz-question',

    render: function() {
        this.collection.each(function(question) {
            var view = new App.Views.Question({ model: question });            
            this.$el.append(view.render().$el);
        }, this);
        return this;
    }
});


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
});

var quiz = new App.Collections.Quiz([
    {
        "Id": "Question1",
        "Question": "Considering only the championships that took place from 1971, which brazilian football club is the greatest national champion?",
		"Answer" : [{ "Answer" : "São Paulo"}, {"Answer" : "Santos"}, {"Answer" : "Palmeiras"}, {"Answer" : "Cruzeiro"}, {"Answer" : "Flamengo"}],
        "CorrectAnswer": 1        
    }
    ,
	{
        "Id": "Question2",
        "Question": "Who scored most goals by the brazilian national championship?",
		"Answer" : [{ "Answer" : "Romário"}, {"Answer" : "Edmundo"}, {"Answer" : "Washington"}, {"Answer" : "Reinaldo"}, {"Answer" : "Ronaldinho Gaúcho"}],
        "CorrectAnswer": 4        
    },
	
	{
        "Id": "Question3",
        "Question": "Which brazilian footbal team has more fans?",
		"Answer" : [{ "Answer" : "Corinthians"}, {"Answer" : "São Paulo"}, {"Answer" : "Flamengo"}, {"Answer" : "Atlético-MG"}, {"Answer" : "Vasco"}],
        "CorrectAnswer": 3        
    },	
	{
        "Id": "Question4",
        "Question": "Which football player has the biggest salary?",
		"Answer" : [{ "Answer" : "Messi"}, {"Answer" : "Ibrahimovic"}, {"Answer" : "Rooney"}, {"Answer" : "Ronaldinho Gaúcho"}, {"Answer" : "Cristiano Ronaldo"}],
        "CorrectAnswer": 5
    }
]);


var QuizView = new App.Views.Quiz({ collection: quiz });
$(document.body).append(QuizView.render().el);  
})();
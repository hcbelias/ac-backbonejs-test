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
        return this;
	}
});

App.Views.Quiz = Backbone.View.extend({    
    tagName: 'ul',
   
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
    
    template: template('answerTemplate'),

    initialize: function() {
		this.render();
	},

	render: function() {        
		this.$el.html( this.template(this.model.toJSON()));
	}
});

var quiz = new App.Collections.Quiz([
    {
        "Id": "Question1",
        "Question": "Considering only the championships that took place from 1971, which brazilian football club is the greatest national champion?",
		"Answer" : { "Answer1" : "São Paulo", "Answer2" : "Santos", "Answer3" : "Palmeiras", "Answer4" : "Cruzeiro", "Answer5" : "Flamengo"},
        "CorrectAnswer": "Answer1",        
    },
	{
        "Id": "Question2",
        "Question": "Who scored most goals by the brazilian national championship??",
		"Answer" : { "Answer1" : "Romário", "Answer2" : "Edmundo", "Answer3" : "Washington", "Answer4" : "Reinaldo", "Answer5" : "Ronaldinho Gaúcho"},
        "CorrectAnswer": "Answer4",        
    },
	
	{
        "Id": "Question3",
        "Question": "Who scored most goals by the brazilian national championship??",
		"Answer" : { "Answer1" : "Romário", "Answer2" : "Edmundo", "Answer3" : "Washington", "Answer4" : "Reinaldo", "Answer5" : "Ronaldinho Gaúcho"},
        "CorrectAnswer": "Answer1",        
    },
	
	{
        "Id": "Question4",
        "Question": "Who scored most goals by the brazilian national championship??",
		"Answer" : { "Answer1" : "Romário", "Answer2" : "Edmundo", "Answer3" : "Washington", "Answer4" : "Reinaldo", "Answer5" : "Ronaldinho Gaúcho"},
        "CorrectAnswer": "Answer1",        
    },
	
	{
        "Id": "Question5",
        "Question": "Who scored most goals by the brazilian national championship??",
		"Answer" : { "Answer1" : "Romário", "Answer2" : "Edmundo", "Answer3" : "Washington", "Answer4" : "Reinaldo", "Answer5" : "Ronaldinho Gaúcho"},
        "CorrectAnswer": "Answer1",        
    }
]);


var QuizView = new App.Views.Quiz({ collection: quiz });
$(document.body).append(QuizView.render().el);  
})();
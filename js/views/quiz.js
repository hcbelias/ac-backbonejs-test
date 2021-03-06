(function() {
    App.Views.Quiz = Backbone.View.extend({    
        tagName: 'ul',

        className: 'quiz-question',

        initialize: function() {
            userAnswersList.fetch({error: function(m){ alert(m) }});
        },

        render: function() {
            this.collection.each(function(question) {
                var view = new App.Views.Question({ model: question });            
                this.$el.append(view.render().$el);
            }, this);
            return this;
        }
    });

})();

var quiz = new App.Collections.Quiz([
{
    "Id": "1",
    "Question": "Considering only the championships that took place from 1971, which brazilian football club is the greatest national champion?",
    "Answer" : [{ "Answer" : "São Paulo"}, {"Answer" : "Santos"}, {"Answer" : "Palmeiras"}, {"Answer" : "Cruzeiro"}, {"Answer" : "Flamengo"}],
    "CorrectAnswer": "São Paulo"        
}
,
{
    "Id": "2",
    "Question": "Who scored most goals by the brazilian national championship?",
    "Answer" : [{ "Answer" : "Romário"}, {"Answer" : "Edmundo"}, {"Answer" : "Washington"}, {"Answer" : "Reinaldo"}, {"Answer" : "Ronaldinho Gaúcho"}],
    "CorrectAnswer": "Washington"
},

{
    "Id": "3",
    "Question": "Which brazilian footbal team has more fans?",
    "Answer" : [{ "Answer" : "Corinthians"}, {"Answer" : "São Paulo"}, {"Answer" : "Flamengo"}, {"Answer" : "Atlético-MG"}, {"Answer" : "Vasco"}],
    "CorrectAnswer": "Flamengo"
},  
{
    "Id": "4",
    "Question": "Which football player has the biggest salary?",
    "Answer" : [{ "Answer" : "Messi"}, {"Answer" : "Ibrahimovic"}, {"Answer" : "Rooney"}, {"Answer" : "Eto'o"}, {"Answer" : "Cristiano Ronaldo"}],
    "CorrectAnswer": "Eto'o"
}
,  
{
    "Id": "5",
    "Question": "Which football player won Fifa Ballon D'Or 2013?",
    "Answer" : [{ "Answer" : "Messi"}, {"Answer" : "Ibrahimovic"}, {"Answer" : "Rooney"}, {"Answer" : "Eto'o"}, {"Answer" : "Cristiano Ronaldo"}],
    "CorrectAnswer": "Cristiano Ronaldo"
}
]);

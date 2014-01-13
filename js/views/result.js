(function() {
     App.Views.Result = Backbone.View.extend({    
        tagName: 'div',

        className: 'quiz-result',

        render: function() {
            // this.collection.each(function(question) {
            //     var view = new App.Views.Question({ model: question });            
            //     this.$el.append(view.render().$el);
            // }, this);
            return this;
        }
    });

})();

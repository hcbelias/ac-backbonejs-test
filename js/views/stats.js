(function() {
    App.Views.Stats = Backbone.View.extend({    
        tagName: 'div',

        template: template('statsTemplate'),

        className: 'stats-data',

        render: function() {
            return this.loadData();
        },

        loadData: function(){
            
        }
    });

})();
aa
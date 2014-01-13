(function() {

	window.App = window.App || {
        Models: {},
        Collections: {},
        Views: {}
    };

    App.Collections.Answer = Backbone.Collection.extend({
        model: App.Models.Answer,
        localStorage: new Backbone.LocalStorage("answer-list-storage")
    });

})();
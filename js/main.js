
(function() {
	
    window.App = window.App || {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {}
    };
    var router = new App.Routers.AppRouter();
    Backbone.history.start();
})();

define(["underscore"],
    function (_) {
	var Util = {
		GetApp: function()
		{
			return window.App || 
				{
					Models: {},
					Collections: {},
					Views: {},
					Routers: {}
				};
		},
		Template: function(elementId)
		{
			return _.template( $('#' + elementId).html() );
		}
	}

});


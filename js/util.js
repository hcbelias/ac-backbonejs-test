
function GetApp()
{
    return window.App || 
        {
            Models: {},
            Collections: {},
            Views: {},
            Routers: {}
        };
}
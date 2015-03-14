var templates = [
    "root/externallib/text!root/plugins/mootes14/login.html",

];

define(templates, function (loginForm) {
    var plugin = {
        settings: {
            name: "mootes14",
            type: "general",
            menuURL: "#mootes14",
            icon: "plugins/events/icon.png",
            lang: {
                component: "core"
            }
        }   

        
    };

   

    // Replace the sign-up form with our custom template.
    $("#add-site_template").html(loginForm);

    // Automatically use the URL of the moodle moot without further checks.
    MM.checkSite = function(e) {
        MM.addSite(e);
    };

   

    // Do not display the manage accounts page.
    MM._displayManageAccounts = function() {
        MM._displayAddSite();
    };

    MM.registerPlugin(plugin);

});
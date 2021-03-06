var templates = [
    "root/externallib/text!root/plugins/mootes14/login.html",
    "root/externallib/text!root/plugins/mootes14/program.html"
];

define(templates, function (loginForm, program) {
    var plugin = {
        settings: {
            name: "mootes14",
            type: "general",
            menuURL: "#mootes14",
            icon: "plugins/mootes14/bolsa.png",
            lang: {
                component: "core"
            }
        },

        routes: [
            ["mootes14", "show_program", "showProgram"]
        ],

        showProgram: function() {
            var tpl = {};
            var html = MM.tpl.render(program, tpl);
            MM.panels.show('center', html, {title: MM.lang.s("mootes14")});
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
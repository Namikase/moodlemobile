
define(function () {
    var plugin = {
        settings: {
            name: "Bolsa de Trabajo",
            type: "general",
            menuURL: "http://campus.industrial.unmsm.edu.pe/bolsa_trabajo/alumnos/#no-back-button",
            icon: "plugins/events/icon.png",
            lang: {
                component: "core"
            }
        },

        routes: [
            ["Bolsa de Trabajo", "show_program", "showProgram"]
        ],

        showProgram: function() {
            var tpl = {};
            var html = MM.tpl.render(program, tpl);
            MM.panels.show('center', html, {title: MM.lang.s("Bolsa de Trabajo")});
        }
    };


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
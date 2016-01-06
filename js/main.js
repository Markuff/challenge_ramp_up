// js/main.js

// All other files named here, are relative in postion to this file.

requirejs.config({
    baseUrl: 'js',
    paths: {
        jQuery: 'lib/jquery-1.11.3.min',
        underscore: 'lib/underscore-min',
        backbone: 'lib/backbone-min',
        handlebars: 'lib/handlebars-v4.0.5',
        crime_Mod: 'models/crime',
        crimes_Col: 'collections/crimes',
        crimes_Vie: 'views/crimes',
        app_Vie: 'views/app',
        app_JS: 'app'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'crime_Mod': {
            exports: 'crime_mod'
        },
        'crimes_Col': {
            exports: 'crimes_col'
        },
        'crimes_Vie': {
            exports: 'crimes_vie'
        },
        'app_Vie': {
            exports: 'app_vie'
        },
        'app_JS': {
            exports: 'app_js'
        }
    }
});

requirejs(
    ['jQuery', 'underscore', 'backbone', 'handlebars', 'crime_Mod', 'crimes_Col', 'crimes_Vie', 'app_Vie', 'app_JS'], 
    function ($, _, Backbone, handlebars, crime_mod, crimes_col, crimes_vie, app_vie, app_js) 
    {}
);
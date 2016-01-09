// js/main.js

// All other files named here, are relative in postion to this file.

require.config({
    baseUrl: 'js',
    paths: {
        jQuery: 'lib/jquery-1.11.3.min',
        underscore: 'lib/underscore-min',
        backbone: 'lib/backbone-min',
        handlebars: 'lib/handlebars-v4.0.5',
        //CrimeModel: 'models/crime',
        /*
        crimesCol: 'collections/crimes',
        crimesVie: 'views/crimes',
        appVie: 'views/app',
        appJS: 'app'
        */
    },
    shim: {
        'jQuery': {
            exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jQuery'],
            exports: 'Backbone'
        },
        /*'crime_Mod': {
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
        }*/
    }
});

require(
    ['views/app'], 
    function (AppView) 
    {
        new AppView();
    }
);
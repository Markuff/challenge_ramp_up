// js/main.js | All other files named here, are relative in postion to this file.

require.config({
    baseUrl: 'js',
    paths: {
        jQuery: 'lib/jquery-1.11.3.min',
        underscore: 'lib/underscore-min',
        backbone: 'lib/backbone-min',
        handlebars: 'lib/handlebars-v4.0.5'
    },
    shim: {
        'jQuery': {
            exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jQuery'],
            exports: 'Backbone'
        }
    }
});

require(['jQuery','views/app'], function ($, AppView) {
    //var dateSelectors = $('#dateSelectors').val();
    //var dateSelected = dateSelectors.slice(0,7);
    new AppView();
});
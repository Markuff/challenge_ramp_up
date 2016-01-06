// js/main.js

// All other files named here, are relative in postion to this file.

requirejs.config({
    baseUrl: 'js',
    paths: {
        jQuery: 'lib/jquery-1.11.3.min',
        underscore: 'lib/underscore-min',
        backbone: 'lib/backbone-min',
        handlebars: 'lib/handlebars-v4.0.5',
        crime_Model: 'models/crime',
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'crime_Model': {
            exports: 'crime_model'
        },
    }
});

requirejs(['jQuery', 'underscore', 'backbone', 'handlebars', 'crime_Model'], 
          function ($, _, Backbone, handlebars, crime_model) {});
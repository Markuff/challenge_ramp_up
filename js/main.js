// js/main.js

// All other files named here, are relative in postion to this file.

require.config({
    paths: {
        'jQuery': 'lib/jquery-1.11.3.min',
        'underscore': 'lib/underscore-min',
        'backbone': 'lib/backbone-min',
        'handlebars': 'lib/handlebars-v4.0.5',
    },
    shim: {
        'jQuery': '$',
        'underscore': '_',
        'backbone': 'Bckb',
        'handlebars': 'Hbs',
    },
});

//Load made modules
requirejs(['jQuery', 'underscore', 'backbone', 'handlebars'], function ($, _, Bckb, Hbs) {
    //if ($) {console.log ('jQuery loaded...');}
    //if (_) {console.log ('handlebars loaded...');}
    //return true;
});
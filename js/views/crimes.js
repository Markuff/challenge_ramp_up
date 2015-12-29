// js/views/crimes.js

var app = app || {};

app.CrimeView = Backbone.View.extend ({
    tag: 'section',
    id: 'content',
    template: _.template( $('#crimes').html() )
});
// js/views/crimes.js

define(['backbone', 'handlebars', 'crimes_Col'], function (Backbone, Handlebars, crimes_col) {
    
    var app = app || {};

    app.CrimeView = Backbone.View.extend ({
        tagName: 'div',
        className: 'each-crime',
        template: Handlebars.compile($('#crimes').html()),
        render: function () {
            this.$el.html( this.template( this.model.attributes ) );
            return this;
        },
    });
    
});
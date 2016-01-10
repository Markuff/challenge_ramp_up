// js/views/crimes.js

define(['backbone', 'handlebars'], function (Backbone, Handlebars) {
    
    var CrimeView = Backbone.View.extend ({
        tagName: 'div', // Wrap of each individual view of each model
        className: 'each-crime',
        template: Handlebars.compile($('#crimes').html()), // Compiles the Handlebars template
        render: function () {
            // Instanciate on memmory a jQuery object for the view
            this.$el.html( this.template( this.model.attributes ) );
            return this;
        },
    });
    
    return CrimeView;

});
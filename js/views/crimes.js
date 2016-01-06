// js/views/crimes.js


requirejs(['handlebars'], function () {
    
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
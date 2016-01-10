// js/views/crimes.js

define(['backbone', 'handlebars'], function (Backbone, Handlebars) {
    
    var CrimeView = Backbone.View.extend ({
        tagName: 'div',
        className: 'each-crime',
        template: Handlebars.compile($('#crimes').html()),
        render: function () {
            this.$el.html( this.template( this.model.attributes ) );
            return this;
        },
    });
    
    return CrimeView;
    
});
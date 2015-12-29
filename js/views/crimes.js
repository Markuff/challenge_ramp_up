// js/views/crimes.js

var app = app || {};

app.CrimeView = Backbone.View.extend ({
    tagName: 'div',
    className: 'each-crime',
    template: _.template( $('#crimes').html() ),
    render: function () {
        this.$el.html( this.template( this.model.attributes ) );
        return this;
    },
});
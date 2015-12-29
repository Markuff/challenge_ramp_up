// js/views/app.js

var app = app || {};

app.AppView = Backbone.View.extend ({
    el:'#applic',
    initialize: function () {
        this.listenTo(app.Crimes, 'add', this.fill);
        app.Crimes.fetch();
    },
    fill: function () {
        var view = new app.CrimeView();
        $('applic').append(view.render().el);
    }
});
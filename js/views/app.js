// js/views/app.js

var app = app || {};

app.AppView = Backbone.View.extend ({
    el:'#applic',
    initialize: function () {
        this.listenTo(app.Crimes, 'update', this.fill);
        app.Crimes.fetch();
    },
    fill: function (crimes) { 
                                                                            console.log(crimes);
        for(var i = 0; i < crimes.length; i++) {
            var view = new app.CrimeView({model:crimes.models[i]});
                                                                            console.log(crimes.models[i]);
            $('#content').append(view.render().el);
        }
    }
});
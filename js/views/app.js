// js/views/app.js

var app = app || {};

app.AppView = Backbone.View.extend ({
    // DOM reference element, allows later rendering
    el:'#applic',
    initialize: function () {
        // First listen to assincronical call to the API
        this.listenTo(app.Crimes, 'update', this.fill);
        // Once it has listened the fetch method brings in the data
        app.Crimes.fetch();
    },
    // Method set to populate each model with the API data
    fill: function (crimes) { 
                                                                            //console.log(crimes);
        for(var i = 0; i < crimes.length; i++) {
            var view = new app.CrimeView({model:crimes.models[i]});
                                                                            //console.log(crimes.models[i]);
            // Fills in the DOM object set for it
            $('#content').append(view.render().el);
        }
    }
});
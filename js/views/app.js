// js/views/app.js

//define(['backbone', 'crimes_Vie', 'crimes_Col'], function (Backbone, crimes_vie, crimes_col) {
define(['backbone', 'jQuery', 'collections/crimes', 'views/crimes'], function (Backbone, $, CrimesSet, CrimeView) {

    //var app = app || {};

    //app.AppView = Backbone.View.extend ({
    var AppView = Backbone.View.extend ({
        el:'#applic',
        initialize: function () {
            //this.listenTo(app.Crimes, 'update', this.fill);
            this.listenTo(CrimesSet, 'update', this.fill);
            //app.Crimes.fetch();
            CrimesSet.fetch();
        },
        fill: function (crimes) { 
                                                                                //console.log(crimes);
            for(var i = 0; i < crimes.length; i++) {
                //var view = new app.CrimeView({model:crimes.models[i]});
                var view = new CrimeView({model:crimes.models[i]});
                                                                                //console.log(crimes.models[i]);
                $('#content').append(view.render().el);
            }
        }
    });
    
    //return app.AppView;
    return AppView;

});
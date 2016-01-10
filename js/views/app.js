// js/views/app.js

define(['backbone', 'jQuery', 'collections/crimes', 'views/crimes'], function (Backbone, $, CrimesSet, CrimeView) {
    
    var AppView = Backbone.View.extend ({
        el:'#applic',
        initialize: function () {
            this.listenTo(CrimesSet, 'update', this.fill);
            CrimesSet.fetch();
        },
        fill: function (crimes) { 
                                                                                //console.log(crimes);
            for(var i = 0; i < crimes.length; i++) {
                var view = new CrimeView({model:crimes.models[i]});
                                                                                //console.log(crimes.models[i]);
                $('#content').append(view.render().el);
            }
        }
    });
    
    return AppView;

});
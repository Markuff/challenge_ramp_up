// js/views/app.js

define(['backbone', 'jQuery', 'collections/crimes', 'views/crimes'], function (Backbone, $, CrimesSet, CrimeView) {
    
    var AppView = Backbone.View.extend ({
        // DOM reference element, allows later rendering
        el:'#applic',
        initialize: function () {
            $('#dateSelectors').change(function (e) {console.log(this.value); var tmp = this.value; var tmp2 = tmp.slice(0,7); console.log(tmp2);  });
            // First listen to assincronical call to the API
            this.listenTo(CrimesSet, 'update', this.fill);
            // Once it has listened the fetch method brings in the data
            CrimesSet.fetch();
        },
        // Method set to populate each model with the API data
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
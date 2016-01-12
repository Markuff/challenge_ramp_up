// js/views/app.js

define(['backbone', 'jQuery', 'collections/crimes', 'views/crimes'], function (Backbone, $, CrimesSet, CrimeView) {
    
    var AppView = Backbone.View.extend ({
        // DOM reference element, allows later rendering
        el:'#applic',
        initialize: function () {
            // First listen to assincronical call to the API
            this.listenTo(CrimesSet, 'update', this.fill);
            // Once it has listened the fetch method brings in the data
            CrimesSet.fetch();
            // Listens to the selector and when it changes pulls the data from the date input 
            $('#dateSelectors').change(function (e) {
                CrimesSet.setDate(this.value);
                CrimesSet.fetch();
            });
        },
        // Method set to populate each model with the API data
        fill: function (crimes) { 
            $('#content').html('');
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
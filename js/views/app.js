// js/views/app.js

define(['backbone', 'jQuery', 'collections/crimes', 'collections/categories', 'views/crimes', 'views/categories'], function (Backbone, $, CrimesSet, CategoriesSet, CrimeView, CategoryView) {
    
    var AppView = Backbone.View.extend ({
        el:'#applic', // DOM reference element, allows later rendering
        initialize: function () {
            this.listenTo(CrimesSet, 'update', this.fill); // First listen to assincronical call to the API
            CrimesSet.fetch(); // Once it has listened the fetch method brings in the data
            this.listenTo(CategoriesSet, 'update', this.fillCats);
            CategoriesSet.fetch();
            // Listens to the selector and when it changes pulls the data from the date input 
            $('#selectors').on('change', '#dateSelectors', function (e) {
                CrimesSet.setDate(this.value);
                CrimesSet.fetch();
                CategoriesSet.fetch();
            });
            //$('#categ').change(function (r) {
            $('#selectors').on('change', '#categ', function (r) {
                CrimesSet.setCategory(this.value);
                CrimesSet.fetch();
            });
        },
        // Method set to populate each model with the API data
        fill: function (crimes) { 
            $('#content').html('');                                             //console.log(crimes);
            for(var i = 0; i < crimes.length; i++) {
                var view = new CrimeView({model:crimes.models[i]});             //console.log(crimes.models[i]);
                $('#content').append(view.render().el);
            }
        },
        fillCats: function (cats) {
            $('#selectors').html(''); 
            var viewCats = new CategoryView({model:cats.models});
            $('#selectors').append(viewCats.render().el)
        }
    });
    
    return AppView;

});
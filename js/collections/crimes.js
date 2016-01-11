// js/collections/crimes.js

define(['jQuery', 'backbone','models/crime'], function ($, Backbone, CrimeModel) {
    
    // This collection will handle the models
    var CrimesSet = Backbone.Collection.extend ({
        model: CrimeModel,
        //date: '2013-01',
        /*setDate: function (string) {
            var a = $('#dateSelectors').change( function (e) {
                //console.log(this.value);
            });
            var b = a.slice(0,7);
            this.date;
        },
        url: function () {
            return this.document.url('https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=') + this.setDate();
        },*/
        url: 'https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2013-01'
    });
    
    // Instanciates "CrimesSet" object
    return new CrimesSet();

});
// js/collections/crimes.js

define(['backbone','models/crime'], function (Backbone, CrimeModel) {

    //var app = app || {};

    var CrimesSet = Backbone.Collection.extend ({
        //model: app.Crime,
        model: CrimeModel,
        url: 'https://data.police.uk/api/crimes-no-location?category=all-crime&force=warwickshire&date=2013-09'
    });

    //app.Crimes = new CrimesSet ();
    
    return new CrimesSet();

});
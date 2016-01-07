// js/collections/crimes.js

define(['backbone','crime_Mod'], function (Backbone, crime_mod) {

    var app = app || {};

    var CrimesSet = Backbone.Collection.extend ({
        model: app.Crime,
        url: 'https://data.police.uk/api/crimes-no-location?category=all-crime&force=warwickshire&date=2013-09'
    });

    app.Crimes = new CrimesSet ();

});
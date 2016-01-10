// js/collections/crimes.js

define(['backbone','models/crime'], function (Backbone, CrimeModel) {
    
    // This collection will handle the models
    var CrimesSet = Backbone.Collection.extend ({
        model: CrimeModel,
        url: 'https://data.police.uk/api/crimes-no-location?category=all-crime&force=warwickshire&date=2013-09'
    });
    
    // Instanciates "CrimesSet" object
    return new CrimesSet();

});
// js/collections/crimes.js

define(['backbone','models/crime'], function (Backbone, CrimeModel) {

    var CrimesSet = Backbone.Collection.extend ({
        model: CrimeModel,
        url: 'https://data.police.uk/api/crimes-no-location?category=all-crime&force=warwickshire&date=2013-09'
    });
    
    return new CrimesSet();

});
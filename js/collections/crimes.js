// js/collections/crimes.js

define(['backbone','models/crime'], function (Backbone, CrimeModel) {
    
    // This collection will handle the models
    var CrimesSet = Backbone.Collection.extend ({
        model: CrimeModel,
        // Default date with data
        date: '2015-11',
        // Method that recieves and handles the string to generate the date for the URL
        setDate: function (stringDate) {
                                                                            //console.log(stringDate);
            this.date = stringDate.slice(0,7);
        },
        url: function () {
            return 'https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=' + this.date;
        }
    });
    
    // Instanciates "CrimesSet" object
    return new CrimesSet();

});
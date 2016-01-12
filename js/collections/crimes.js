// js/collections/crimes.js

define(['backbone','models/crime'], function (Backbone, CrimeModel) {
    
    // This collection will handle the models
    var CrimesSet = Backbone.Collection.extend ({
        model: CrimeModel,
        date: '2015-11', // Default date with data
        // Method that recieves and handles the string to generate the date for the URL
        setDate: function (stringDate) {                            //console.log(stringDate);
            this.date = stringDate.slice(0,7);
        },
        category: 'all-crime',
        setCategory : function (stringCategory) {                   //console.log('test categories ', this.category);
            this.category = stringCategory;
        },
        url: function () {
            return 'https://data.police.uk/api/crimes-street/' + this.category + '?lat=52.629729&lng=-1.131592&date=' + this.date;
        }
    });
    
    return new CrimesSet(); // Instanciates "CrimesSet" object

});
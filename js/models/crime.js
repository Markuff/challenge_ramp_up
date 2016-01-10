// js/models/crime.js

// This is the model of the data that will be recived from the API
define(['backbone'], function (Backbone) {
    
    var CrimeModel = Backbone.Model.extend ({
        defaults: {
            category: '',
            outcome_status: {
                category: '',
                date: ''
            },
            id: 00000000,
            month: ''
        }
    });
    
    return CrimeModel;

});
// js/models/crime.js

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
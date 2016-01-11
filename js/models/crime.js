// js/models/crime.js

// This is the model of the data that will be recived from the API
define(['backbone'], function (Backbone) {
    
    var CrimeModel = Backbone.Model.extend ({
        defaults: {
            category: "",
            location_type: "Force",
            id: 00000000,
            location: {
                latitude: "0.0",
                longitude: "0.0",
                street: {
                    id: 000000,
                    name: ""
                },
            },
            context: "",
            month: "2013-01",
            outcome_status: {
                category: "",
                date: ""
            }
        }
    });
    
    return CrimeModel;

});
// js/models/crime.js

var app = app || {};

// This is the model of the data that will be recived from the API
app.Crime = Backbone.Model.extend ({
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
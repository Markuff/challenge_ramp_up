// js/models/crime.js

var app = app || {};

var app.Crime = Backbone.Model.extend ({
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
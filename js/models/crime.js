// js/models/crime.js

var app = app || {};

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
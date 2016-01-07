// js/collections/crimes.js

var app = app || {};

// This collection will handle the models
var CrimesSet = Backbone.Collection.extend ({
    model: app.Crime,
    url: 'https://data.police.uk/api/crimes-no-location?category=all-crime&force=warwickshire&date=2013-09'
});

// Instanciates "CrimesSet"
app.Crimes = new CrimesSet ();
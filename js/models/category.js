// js/models/category.js

// This is the model of the data that will be recived from the API
define(['backbone'], function (Backbone) {
    
    var CategoryModel = Backbone.Model.extend ({
        defaults: {
            "url": "all-crime",
            "name": "All crime and ASB"
        }
    });
    
    return CategoryModel;

});
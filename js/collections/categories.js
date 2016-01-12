// js/collections/categories.js

define(['backbone', 'models/category', 'collections/crimes'], function (Backbone, CategoryModel, CrimesSet) {
    
                                                                        //console.log(CrimesSet.date);
    
    var CategoriesSet = Backbone.Collection.extend ({
        model: CategoryModel,
        date: CrimesSet.date,
        url: function () {
            return 'https://data.police.uk/api/crime-categories?date=' + this.date;
        }
    });
    
    return new CategoriesSet();
    
});
// js/views/categories.js

define(['backbone', 'handlebars'], function (Backbone, Handlebars) {
    
    var CategoryView = Backbone.View.extend ({
        template: Handlebars.compile($('#selects').html()), // Compiles the Handlebars template
        render: function () {
            // Instanciate on memmory a jQuery object for the view
            this.$el.html( this.template({arrayCats:this.model}) );                  //console.log(this.model)
            return this;
        },
    });
    
    return CategoryView;

});
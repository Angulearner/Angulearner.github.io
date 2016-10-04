(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


// categories is injected through state's resolve
CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
function CategoriesController() {
  var self = this;
  self.categories = categories;

}

})();

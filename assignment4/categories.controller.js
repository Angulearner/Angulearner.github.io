(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


// MainShoppingListController.$inject = ['ShoppingListService'];
// function MainShoppingListController(ShoppingListService) {
CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  var self = this;
  self.categories = categories;

}

})();

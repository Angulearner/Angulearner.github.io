(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoriesController', MainCategoriesController);


// categories is injected through state's resolve
MainCategoriesController.$inject = ['items'];
function MainCategoriesController(items) {
  var self = this;
  self.items = items;

}

})();

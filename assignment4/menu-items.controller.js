(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemsController', MenuItemsController);

// 'item' is injected through state's resolve
MenuItemsController.$inject = ['itemsDirective']
function MenuItemsController(items) {
  var self = this;
  self.items = items;
}

})();

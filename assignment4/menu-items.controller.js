(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemsController', MenuItemsController);

// 'item' is injected through state's resolve
MenuItemsController.$inject = ['items'];
function MenuItemsController(items) 
{
    var self = this;
    self.items = items;
    self.category = "X";
  
    self.setCategory = function(cat)
   {
     self.category = cat; 
   }
}

})();

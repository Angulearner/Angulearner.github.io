(function(){

angular.module('NarrowItDownApp')
  .controller('NarrowItDownController', NarrowItDownController);
  
  
   NarrowItDownController.$inject = []; // ['MenuSearchService'];
   function NarrowItDownController () // (MenuSearchService)
   {
      var self = this;
      self.found = {};
  /*   
      self.getMatchedItems = function()
      {
        // self.found = MenuSearchService.getMatchedMenuItems(); 
        
      }
      
      self.onRemove = function(index)
      {
           self.found.splice(index, 1);
      }
    */
   }






})();

(function(){

angular.module('NarrowItDownApp')
  .controller('NarrowItDownController', NarrowItDownController);
  
  
   NarrowItDownController.$inject = ['MenuSearchService'];
   function NarrowItDownController (MenuSearchService)
   {
      var self = this;
      self.found = {};
     
      self.getMatchedItems = function()
      {
        self.found = MenuSearchService.getMatchedMenuItems(); 
        
      }
   }






})();

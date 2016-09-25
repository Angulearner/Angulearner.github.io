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
        var promise = MenuSearchService.getMatchedMenuItems(); 
        console.log (promise);
        promise.then(function(returnedItems)
        {
            self.found = returnedItems;
        }
          
      }
      
      self.onRemove = function(index)
      {
           self.found.splice(index, 1);
      }
    
   }






})();

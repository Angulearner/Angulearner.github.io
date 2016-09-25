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
        console.log ("promise returned from service = " + promise);
        promise.then(function(returnedItems)
        {
            self.found = returnedItems;
            console.log ("returned items = " + returnedItems);
          console.log ("returned items.data = " + returnedItems.data);
        })
          
      }
      
      self.onRemove = function(index)
      {
           self.found.splice(index, 1);
      }
    
   }






})();

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
          
            var count = 0;
            for (item in returnedItems)
            { 
                count++;
                console.log ("found item " +count + " with name " + item['name']);
            }
          
        })
          
      }
      
      self.onRemove = function(index)
      {
           self.found.splice(index, 1);
      }
    
   }






})();

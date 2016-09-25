(function(){

angular.module('NarrowItDownApp')
  .controller('NarrowItDownController', NarrowItDownController);
  
  
   NarrowItDownController.$inject = ['MenuSearchService'];
   function NarrowItDownController (MenuSearchService)
   {
      var self = this;
      self.found = {};
      self.term = "";
     
      self.findItems = function()
      {
         self.getMatchedItems(self.term);
      }
     
      self.getMatchedItems = function(searchTerm)
      {
        var promise = MenuSearchService.getMatchedMenuItems(searchTerm); 
        
        promise.then(function(returnedItems)
        {
            self.found = returnedItems;
            
        })
          
      }
      
      self.removeItem = function(index)
      {
           self.found.splice(index, 1);
      }
    
   }






})();

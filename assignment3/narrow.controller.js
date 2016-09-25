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
          
        //    var count = 0;
        //    for (item in returnedItems)
        //    { 
        //        count++;
                var item = returnedItems[0];
                console.log ("first item is " + item);
          
             for (var key in item)
             {
                console.log (key + " -->  "  + item[key]); 
             }
                
        //    }
          
          console.log(self.found);
          
        })
          
      }
      
      self.removeItem = function(index)
      {
           self.found.splice(index, 1);
      }
    
   }






})();

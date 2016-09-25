(function(){

angular.module('NarrowItDownApp')
  .directive('foundItems', foundItems);
  
  function foundItems()
  {
      var ddo =  
      {
          templateUrl: 'listFoundItems.html'
      };
    
      return ddo;
  }
  
  /*
    {
      templateUrl: 'listFoundItems.html',
      controller: FoundItemsComponentController,
      bindings:
      {
          found: '<',
          onRemove: '&'
      }
    });

   FoundItemsComponentController.$inject = [];
   function FoundItemsComponentController ()
   {
      var self = this;
     
     self.remove = function(myIndex) 
     {
       self.onRemove({ index: myIndex})
     }
      
   }
*/



})();

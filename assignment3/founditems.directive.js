(function(){

angular.module('NarrowItDownApp')
  .directive('foundItems', foundItems);
  
  function foundItems()
  {
      var ddo =  
      {
          scope: 
        {
          found: '<',
          onRemove: '&'
        },
        controller: FoundItemsController,
        bindToController: true,
        controllerAs: 'fiCtrl',
        templateUrl: 'listFoundItems.html'
      };
    
      return ddo;
  }
  
  FoundItemsController.$inject=[];
  function FoundItemsController()
  {
        var fiCtrl = this;

        fiCtrl.remove = function(myIndex) 
        {
           fiCtrl.onRemove({ index: myIndex})
        }
    
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

(function(){

angular.module('NarrowItDownApp')
  .directive('foundItems', foundItemsDirective);
  
  function foundItemsDirective()
  {
      var ddo =  
      {
        templateUrl: 'listFoundItems.html',
        scope: 
        {
          foundList: '<',
          onRemove: '&'
        },
        controller: FoundItemsController,
        bindToController: true,
        controllerAs: 'fiCtrl'
        
      };
    
      return ddo;
  }
  
  FoundItemsController.$inject=[];
  function FoundItemsController()
  {
        var fiCtrl = this;

   //     fiCtrl.remove = function(myIndex) 
   //     {
   //        fiCtrl.onRemove({ index: myIndex})
   //     };
    
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

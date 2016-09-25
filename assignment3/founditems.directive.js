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

  }
  


})();

(function(){

angular.module('NarrowItDownApp')
  .component('foundItems', 
    {
      templateUrl: 'listFoundItems.html',
      controller: FoundItemsComponentController,
      bindings:
      {
          found: '<',
          onRemove: '&'
      }
    });






})();

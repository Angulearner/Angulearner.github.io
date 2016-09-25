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

   FoundItemsComponentController.$inject = [];
   function FoundItemsComponentController ()
   {
      var self = this;
     
     self.remove = function(myIndex) 
     {
       self.onRemove({ index: myIndex})
     }
      
   }




})();

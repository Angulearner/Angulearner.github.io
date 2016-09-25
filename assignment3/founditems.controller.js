(function(){

angular.module('NarrowItDownApp')
  .controller('FoundItemsComponentController', FoundItemsComponentController);
  
  
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

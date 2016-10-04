(function(){
  
  angular.module('data')
    .service('menuDataService', MenuDataService);
  
  MenuDataService.$inject = ['$http'];
  function MenuDataService($http)
  {
    self = this;
    
    self.getAllCategories = function()
    {
      
    };
    
    self.getItemsForCategory = function(categoryShortName)
    {
      
      
    };
    
  };
  
})();

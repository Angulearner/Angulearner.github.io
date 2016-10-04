(function(){
  
  angular.module('data')
    .service('menuDataService', MenuDataService);
  
  MenuDataService.$inject = ['$http'];
  function MenuDataService($http)
  {
    self = this;
    
    self.getAllCategories = function()
    {
        return $http.get('https://davids-restaurant.herokuapp.com/categories.json');
    };
    
    self.getItemsForCategory = function(categoryShortName)
    {
        var url = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName;
      
        return $http.get(url);
      
    };
    
  };
  
})();

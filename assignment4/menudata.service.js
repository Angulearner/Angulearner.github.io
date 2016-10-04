(function(){
  
  angular.module('MenuApp')
    .service('menuDataService', MenuDataService);
  
  MenuDataService.$inject = ['$http'];
  function MenuDataService($http)
  {
    self = this;
    
    console.log("menuDataService is here!!!!!");
    
    self.getAllCategories = function()
    {
        console.log("Here we are trying to get all the categories!!!");
        var promise =  $http.get('https://davids-restaurant.herokuapp.com/categories.json');
        console.log ("our promise is " + promise);
        return promise; 
    };
    
    self.getItemsForCategory = function(categoryShortName)
    {
        var url = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName;
      
        return $http.get(url);
      
    };
    
  };
  
})();

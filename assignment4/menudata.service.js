(function(){
  
  angular.module('MenuApp')
    .service('MenuDataService', MenuDataService);
  
  MenuDataService.$inject = ['$http'];
  function MenuDataService($http)
  {
    self = this;
    
    self.getAllCategories = function()
    {
        var promise =  $http.get('https://davids-restaurant.herokuapp.com/categories.json');
        
        return promise; 
    };
    
    self.getItemsForCategory = function(categoryShortName)
    {
        console.log ("getting items for category " + categoryShortName);
      
        var url = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName;
      
        var prom =  $http.get(url);
        console.log ("our promise is " + prom);

      
        prom.then(function(response)
        {
            console.log ("response.data = " + response.data);
            console.log ("response.data.menu_items = " + response.data.menu_items); 
        });
       
  
        
      
        return prom;
      
      
    };
    
  };
  
})();

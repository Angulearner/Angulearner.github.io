(function(){

angular.module('NarrowItDownApp')
  .service('MenuSearchService', MenuSearchService);
  
  MenuSearchService.$inject = ['$http'];
   function MenuSearchService ($http)
   {
     self = this;
      self.getMatchedMenuItems = function (searchTerm)
      {
          return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json')
            .then(function (result) 
            {
                // process result and only keep items that match
                var foundItems = result.data; // todo finish this!

              // return processed items
              console.log("found items = " + foundItems.menu_items;
              return foundItems;
          }).catch(function(error) { console.log ("problem!!");  });   
        
       
      } 
      
   }






})();

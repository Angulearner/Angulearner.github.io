(function(){

angular.module('NarrowItDownApp')
  .service('MenuSearchService', MenuSearchService);
  
  MenuSearchService.$inject = ['$http'];
   function MenuSearchService ($http)
   {
     self = this;
      self.getMatchedMenuItems = function (searchTerm)
      {
          var promise = $http ('https://davids-restaurant.herokuapp.com/menu_items.json'); 
         
          promise.then(function (result) 
          {
                // process result and only keep items that match
                var foundItems = result; // todo finish this!

              // return processed items
              return foundItems;
          }).catch(function(error) { console.log ("problem!!");  });           
       
      } 
      
   }






})();

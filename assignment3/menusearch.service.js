(function(){

angular.module('NarrowItDownApp')
  .service('MenuSearchService');
  
   function MenuSearchService ()
   {
      function getMatchedMenuItems(searchTerm)
      {
        return $http
        ({ 
            method: 'GET',
            url: 'http://davids-restaurant.herokuapp.com/menu_items.json'
        })
        .then(function (result) 
        {
              // process result and only keep items that match
              var foundItems; // todo finish this!

            // return processed items
            return foundItems;
          });         
       
      }
      
   }






})();

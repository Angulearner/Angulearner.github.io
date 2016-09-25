(function(){

angular.module('NarrowItDownApp')
  .service('MenuSearchService');
  
   function MenuSearchService ()
   {
      function getMatchedMenuItems(searchTerm)
      {
        $http ({ 
            method: 'GET',
            url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
        })
        .then(function (result) 
        {
              // process result and only keep items that match
              var foundItems = result; // todo finish this!

            // return processed items
            return foundItems;
          });         
       
      }
      
   }






})();

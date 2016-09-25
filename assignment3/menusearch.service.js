(function(){

angular.module('NarrowItDownApp')
  .factory('MenuSearchFactory', MenuSearchFactory);
  
  
  function MenuSearchFactory() 
  {
      var factory = function () 
      {
        return new MenuSearchService();
      };

      return factory;
  }
  
   function MenuSearchService ()
   {
     self = this;
    /*  self.getMatchedMenuItems = function (searchTerm)
      {
          var promise = $http ('https://davids-restaurant.herokuapp.com/menu_items.json'); 
         
          promise.then(function (result) 
          {
                // process result and only keep items that match
                var foundItems = result; // todo finish this!

              // return processed items
              return foundItems;
          }).catch(function(error) { console.log ("problem!!");  });           
       
      } */
      
   }






})();

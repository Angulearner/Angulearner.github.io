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
                var foundItems = result.data; 
            
               var menuItems = foundItems.menu_items[0];
               var narrowedItems = {};
                var count = 1;
               for (var item in menuItems)
               {
                 console.log(count + "   " + item.description);
                 count++;
                 // if (item["description"].indexOf(searchTerm))
                 //     narrowedItems.push(item);
               }
              // return processed items
              
              return narrowedItems;
            
          }).catch(function(error) { console.log ("problem!!");  });   
        
       
      } 
      
   }






})();

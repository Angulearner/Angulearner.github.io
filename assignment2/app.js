(function(){
   "use strict";
   
   angular.module('ShoppingListCheckoff', [])
   .controller ('ToBuyShoppingController', ToBuyShoppingController)
   .controller ('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
   .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
   
   ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
   function ToBuyShoppingController (ShoppingListCheckOffService)
   {
      var __this = this;
      
      __this.items = ShoppingListCheckOffService.getItemsToBuy();
      
      __this.buyItem = function(itemIndex)
      {
         ShoppingListCheckOffService.buyItem(itemIndex);
      }
   
   }
   
   AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
   function AlreadyBoughtShoppingController (ShoppingListCheckOffService)
   {
      var __this = this;
      
      __this.items = ShoppingListCheckOffService.getItemsBought();
   
   }
   
   
   function ShoppingListCheckOffService() 
   {
      var __this = this;

      // List of items that can be bought - initialize
      var itemsToBuy = 
      [
         { name: "cookies", quantity: 10 },    
         { name: "crackers", quantity: 5 },
         { name: "sodas", quantity: 3 },
         { name: "pepto bottles", quantity: 2 },
         { name: "ice cream cartons", quantity: 60 }
      ];
      
      // List of items already bought 
      var itemsBought = [];   // starts empty

      __this.buyItem = function (itemIndex) 
      {
         var item = itemsToBuy.splice(itemIndex, 1);
         
         itemsBought.push(item);
      };

      __this.getItemsToBuy = function () 
      {
         return itemsToBuy;
      };
      
      __this.getItemsBought = function ()
      {
         return itemsBought;
      }
   }
   
   
})();

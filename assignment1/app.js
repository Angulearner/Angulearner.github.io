
(function(){
   "use strict";
   
   angular.module('LunchCheck', [])
   .controller ('LunchCheckController', LunchCheckController);
   
   LunchCheckController.$inject = ['$scope'];
   function LunchCheckController ($scope)
   {
      $scope.lunchMessage = "";
      
      $scope.getMessage = function ()
      {
         var lunchText = String($scope.lunchText).trim();
         if (lunchText != "")
         {   
            var lunchArray = lunchText.split(",");
            if (lunchArray.length <= 3)
               $scope.lunchMessage = "Enjoy!";
            else
               $scope.lunchMessage = "Too much!";
        }
        else
         $scope.lunchMessage = "Please enter data first!";      
      }
   
   }
})();

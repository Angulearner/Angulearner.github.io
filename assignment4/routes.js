(function () {
'use strict';
 

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.template.html'
  })

  // Categories page
  .state('mainCategoriesList', {
    url: '/main_categories',
    templateUrl: 'templates/main-categories.html',
    controller: 'MainCategoriesController as catCtrl',

    resolve: {
      items: 
        ['MenuDataService', 
              function (MenuDataService) 
              {   console.log ("In routes, trying to resolve so we can go to Categories page!!!");
                  return MenuDataService.getAllCategories();
              }
        ]
    } 
  });
}

})();

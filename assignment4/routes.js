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
  .state('categories', {
    url: '/categories',
    templateUrl: 'templates/categories.html',
    controller: 'CategoriesController as catCtrl',
   resolve: {
      categories: 
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

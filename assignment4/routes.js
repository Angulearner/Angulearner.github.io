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
    controller: 'MainCategoriesController as mainCatCtrl',

    resolve: {
      items: 
        ['MenuDataService', 
              function (MenuDataService) 
              {   
                  return MenuDataService.getAllCategories();
              }
        ]
    } 
  })
  
  
    .state('menuItems', {
    url: '/menu-items/{categoryShortName}',
    templateUrl: 'templates/main-items.template.html',
    controller: 'MenuItemsController as mainItemCtrl',
    resolve: {
      items: 
         ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) 
            {
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
 
            }
        ]
    }
  });
  
  
  
  
}

})();

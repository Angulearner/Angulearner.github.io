(function(){
  
  angular.module('MenuApp')
    .component('itemsDirective', 
    {
        templateUrl: 'templates/menu-items.template.html',
        bindings:
        {
            items: '<'
        }
    });
  
})();


/* App Module */

angular.module('menu-directive', ['menu-service']);
angular.module('menu-controller', ['ngResource', 'menu-service']);
angular.module('menu-service', []);

angular.module('menu-app', ['ngResource',
	                         'ngRoute',
                             'menu-controller',
                             'menu-service',
                             'menu-directive'
                             ])
                             .config(['$routeProvider', '$locationProvider', '$httpProvider',
                                 function ($routeProvider, $locationProvider, $httpProvider) {
                                 $routeProvider.
                                    otherwise({ templateUrl: '/Scripts/angularjs/int/partial/manage-menu.html', controller: 'ManageMenuCtrl' });
                             }])
                             .run(['$rootScope', '$location',
                                 function ($rootScope, $location) {
                             }]);





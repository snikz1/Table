var purchaseApp = angular.module("purchaseApp", ['ngRoute',
    'purchaseAppController'
]);

purchaseApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/arrival', {
                templateUrl: 'tpls/purchaseController.html',
                controller: 'purchaseController'
            });
        $routeProvider.when('/test', {
                templateUrl: 'tpls/test.html',
                controller: 'test'
            });

        $routeProvider.otherwise({
                redirectTo: 'tpls/test.html'
            });
    }]);
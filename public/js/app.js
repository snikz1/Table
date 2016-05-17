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
        $routeProvider.when('/consumption', {
                templateUrl: 'tpls/consumptionController.html',
                controller: 'consumptionController'
            });
        $routeProvider.when('/common', {
                templateUrl: 'tpls/commonController.html',
                controller: 'commonController'
            });

        $routeProvider.otherwise({
                redirectTo: 'tpls/purchaseController.html'
            });
    }]);
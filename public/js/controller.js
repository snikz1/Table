var purchaseAppcontroller = angular.module('purchaseAppController', []);


purchaseAppcontroller.controller("purchaseController", ['$scope', '$http', function ($scope, $http) {


    $scope.event_space = [];

    console.log($scope.event_space);
    $scope.newEvent = {};
    $scope.addEvent = function (invalidForm) {
        if (invalidForm) return;
        $scope.submitted = false;
        $http.post('/arrival', $scope.newEvent).success(function (resp) {
            $scope.event_space.push({name: resp.name, price: resp.price, description: resp.description});
            $scope.newEvent = {};
        });
    };

    function total() {  //цикл динамического добавления суммы
        var totalNumber = 0;
        for (var i = 0; i < $scope.event_space.length; i++) {
            totalNumber = totalNumber + parseFloat($scope.event_space[i].price)
        }

        return totalNumber;
    }

    $scope.$watchCollection("event_space", function () {  // следит за изменением объектов
        $scope.total = total();


    });


}]);


purchaseAppcontroller.controller("consumptionController", ['$scope', '$http', function ($scope, $http) {
    $scope.event_space = [];

    console.log($scope.event_space);
    $scope.newEvent = {};
    $scope.addEvent = function (invalidForm) {
        if (invalidForm) return;
        $scope.submitted = false;
        $http.post('/arrival', $scope.newEvent).success(function (resp) {
            $scope.event_space.push({name: resp.name, price: resp.price, description: resp.description});
            $scope.newEvent = {};
        });
    };


    function total() {  //цикл динамического добавления суммы
        var totalNumber = 0;
        for (var i = 0; i < $scope.event_space.length; i++) {
            totalNumber = totalNumber + parseFloat($scope.event_space[i].price)
        }

        return totalNumber;
    }

    $scope.$watchCollection("event_space", function () {  // следит за изменением объектов
        $scope.total = total();


    });

}]);

purchaseAppcontroller.controller("commonController", ['$scope', '$http', function ($scope, $http) {


    $scope.showEvent = function () {

        $http.get('/common').success(function (resp) {
            $scope.event_space = resp;

        })
    };
    $scope.showEvent();

    function total() {  //цикл динамического добавления суммы
        var totalNumber = 0;
        for (var i = 0; i < $scope.event_space.length; i++) {
            totalNumber = totalNumber + parseFloat($scope.event_space[i].price)
        }

        return totalNumber;
    }

    $scope.$watchCollection("event_space", function () {  // следит за изменением объектов
        $scope.total = total();
    });

}]);

purchaseAppcontroller.directive('minWords', function () {
    return {
        require: 'ngModel',
        link: function (scope, elem, attr, ngModel) {
            var isValid = function (s) {
                return (s || '').split(" ").length >= parseInt(attr.minWords);
            };
            ngModel.$parsers.unshift(function (value) {
                ngModel.$setValidity('minWords', isValid(value));
                return value;

            });
            //For model -> DOM validation
            ngModel.$formatters.unshift(function (value) {
                ngModel.$setValidity('minWords', isValid(value));
                return value;
            });
        }
    };
});


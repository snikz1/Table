

var purchaseAppcontroller = angular.module('purchaseAppController', []);


purchaseAppcontroller.controller("purchaseController", ['$scope','$http', function ($scope) {


    $scope.event_space = [];

    console.log($scope.event_space);
    $scope.addEvent = function(newEvent){
        var price = parseFloat(newEvent.price);
        if (newEvent.name != ""&& !isNaN(price) ) {
            $scope.event_space.push({name : newEvent.name , price : newEvent.price});

        }
    };

    function total() {  //цикл динамического добавления суммы
        var totalNumber = 0;
        for(var i=0; i<$scope.event_space.length; i++){
            totalNumber = totalNumber + parseFloat($scope.event_space[i].price)
        }

        return totalNumber;
    }
    $scope.$watchCollection("event_space", function() {  // следит за изменением объектов
        $scope.total = total();


    });

}]);



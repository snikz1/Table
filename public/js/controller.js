

var purchaseAppcontroller = angular.module('purchaseAppController', []);


purchaseAppcontroller.controller("purchaseController", ['$scope','$http', function ($scope, $http) {


    $scope.event_space = [];

    console.log($scope.event_space);
    $scope.addEvent = function(newEvent){
        $http.post('/arrival', newEvent).success(function(resp){
            console.log(resp);
            $scope.event_space.push({name:resp.name , price: resp.price})
        });

        //var price = parseFloat(newEvent.price);
        //if (newEvent.name != ""&& !isNaN(price) ) {
        //    $scope.event_space.push({name : newEvent.name , price : newEvent.price});
        //}
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

purchaseAppcontroller.controller("consumptionController", ['$scope', function ($scope) {


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



purchaseAppcontroller.controller("commonController", ['$scope','$http', function ($scope,$http) {



    $scope.showEvent = function (){
        $http.get('/common').success(function(resp){
            $scope.event_space = resp;
            console.log(  resp)

        })
    }


}]);



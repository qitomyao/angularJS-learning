var routeModule = angular.module('routeModule', ['ngRoute']);

routeModule.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/showOrder/:orderId', { //参数名称orderId
            templateUrl: 'templates/order-details.html',
            controller: 'ShowOrderController'
        })
    }]);

routeModule.controller("ShowOrderController",function($scope, $routeParams){
    $scope.order_id = $routeParams.orderId; //获取参数
});


//在AngularJS中，路由模块是一个单独的模块，名称为ngRoute(固定名字),如果需要在自定义模块中使用，需要添加ngRoute模块依赖
var routeModule = angular.module('routeModule', ['ngRoute']);

//config方法在模块加载时被执行，用于对服务进行配置
routeModule.config(['$routeProvider', //在config中注入$routeProvider对象，这是Angular的内置对象
    function($routeProvider) {
        $routeProvider.
        when('/addOrder', { //添加第一个路由
            templateUrl: 'templates/add-order.html', //路径
            controller: 'AddOrderController' //控制器
        }).
        when('/showOrders', {
            templateUrl: 'templates/show-orders.html',
            controller: 'ShowOrdersController'
        }).
        otherwise({
            redirectTo: '/addOrder'
        });
    }]);



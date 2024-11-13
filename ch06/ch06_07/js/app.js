var routeModule = angular.module('routeModule', ['ngRoute']);
routeModule.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/about', {
        templateUrl: 'template/about.html',
        controller: 'AboutController'
    }).
    when('/contact', {
        templateUrl: 'template/contact.html',
        controller: 'ContactController'
    }).
    when('/home', {
        templateUrl: 'template/home.html',
        controller: 'HomeController'
    }).
    otherwise({
        redirectTo: '/home'
    })
}]);

routeModule.controller("HomeController", function($scope) {
    $scope.books = ["Think In Java","Learning Bootstrap","NG Book2"];
});

routeModule.controller("AboutController", function($scope) {
    $scope.name = "江荣波";
});



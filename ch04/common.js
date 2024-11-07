
var loginModule = angular.module("loginModule",[]); //创建模块loginModule

loginModule.controller("UserController",function($scope,$log){ //在loginModule模块中添加UserController控制器

    $scope.uname = "login";
    $scope.pword = "admin";
    $scope.submit = function() {
        alert("登录模块：UserController");
    }

});

//虽然控制器的名字一样，但因为

var registerModule = angular.module("registerModule",[]); //创建模块registerModule

registerModule.controller("UserController",function($scope,$log){ //在registerModule模块中添加UserController控制器
    $scope.uname = "register";
    $scope.pword = "admin";
    $scope.submit = function() {
        alert("注册模块：UserController");
    }
});



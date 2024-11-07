var app = angular.module("app",[]);
app.controller('FirstController',function($scope,$log){
    $log.info("FirstController:name =>" + $scope.name);
    $log.info("FirstController:age =>" + $scope.age);
});

app.controller('SecondController',function($scope,$log){
    $log.info("SecondController:name =>" + $scope.name);
    $log.info("SecondController:age =>" + $scope.age);
});

var parent = $rootScope;
function display()
{
    alert("sss");
    console.log(parent.name);
    console.log(parent.age);
}

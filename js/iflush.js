angular.module("flooshie", [])
.controller("toiletCtrl", ["$scope", "$http", function($scope, $http){
    
    $scope.deviceId = "00e04c035ad5";
    $scope.accessToken = "4fdb248ad771e101c196f31e5be93dffaa247d6994ebe490e303c1e55f1970ed";
    $scope.URL = "https://api-http.littlebitscloud.cc/devices/" + $scope.deviceId;
    
    $("#poo").on("click", function(){
        
    };
                 
    $("#pee").on("click", function(){
        
    };
    
    function liftSeat(){
        
    };
    
    function lowerSeat(){
        
    };
    
    function flush(){
        
    };
    
    //MAKE URL VARIABLE
    $http.put(url)
    .success(function(data){
        console.log(data);
    });
    .error(function(){
        console.log("ERROR");
    });
}]);


if(localStorage["todos"]){
    var todos = JSON.parse(localStorage.getItem("todos"));
} else {
    localStorage.setItem("todos",JSON.stringify({}));
    var todos = {} ;
};

var flush = Function() {
    if button=pressed down {
        flush 
        
    }
}

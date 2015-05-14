angular.module("flooshie", [])
.controller("toiletCtrl", ["$scope", "$http", function($scope, $http){
    
    if(localStorage["flushes"]){
    var flushes = JSON.parse(localStorage.getItem("flushes"));
} else {
    localStorage.setItem("flushes",JSON.stringify({}));
    var flushes = {} ;
};
    
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
        //this.flush==true;
    //if button=pressed down {
        //flush   
    }
    function count() {
        this.current = 0;
        if flush=true;
        this.current ++
//}

    
    //MAKE URL VARIABLE
    $http.put(url)
    .success(function(data){
        console.log(data);
    });
    .error(function(){
        console.log("ERROR");
    });
}]);



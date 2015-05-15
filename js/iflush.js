angular.module("flooshie", [])
.controller("toiletCtrl", ["$scope", "$http", function($scope, $http){
    
    var peeCount, pooCount, gender;
    var data;
    
     $scope.accessToken = "4fdb248ad771e101c196f31e5be93dffaa247d6994ebe490e303c1e55f1970ed";
    
    $scope.deviceId1 = "00e04c035ad5";
    $scope.URL1 = "https://api-http.littlebitscloud.cc/devices/" + $scope.deviceId1 + "/output";
    
    $scope.deviceId2 = "243c200bf913";
    $scope.URL2 = "https://api-http.littlebitscloud.cc/devices/" + $scope.deviceId2 + "/output";
    
    $http.defaults.headers.common.Authorization = "Bearer " + $scope.accessToken;
    
    $scope.poo = function(){
        console.log("POO");
        $http.post($scope.URL2, {percent: 100, duration_ms: 2000})
        .success(function(data){
            pooCount++;
            localStorage.setItem("pooCount", pooCount);
            alert("Flooshed!");
        })
    };
    $scope.pee = function(){
        console.log("PEE");
        $http.post($scope.URL1, {percent: 100, duration_ms: 2000})
        .success(function(data){
            peeCount++;
            localStorage.setItem("peeCount", peeCount);
            alert("Flooshed!");
        })
        .error(function(err){
            console.log(err);
        });
    };
    
    function initFromLocalStorage () {
       if(localStorage["data"]){
            data = JSON.parse(localStorage.getItem("data"));
            peeCount = data.peeCount;
            pooCount = data.pooCount;
            gender = data.gender;
        } else {
            data = {peeCount: 0, pooCount: 0, gender = "male"} ;
            localStorage.setItem("data",JSON.stringify(data));
        }; 
    }
    
    
    
}]);



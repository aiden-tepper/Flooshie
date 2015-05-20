angular.module("flooshie", [])
.controller("toiletCtrl", ["$scope", "$http", function($scope, $http){
    
    $scope.peeCount;
    $scope.pooCount;
    $scope.gender;
    var data;
    
    initFromLocalStorage();
    
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
            $scope.pooCount++;
            alert("Flooshed!");
        })
    };
    $scope.pee = function(){
        console.log("PEE");
        $http.post($scope.URL1, {percent: 100, duration_ms: 2000})
        .success(function(data){
            $scope.peeCount++;
            alert("Flooshed!");
        })
        .error(function(err){
            console.log(err);
        });
    };
    
    function updateLocalStorage () {
        var data = {
            peeCount: $scope.peeCount,
            pooCount: $scope.pooCount,
            gender: $scope.gender
        };
        localStorage.setItem("data", JSON.stringify(data));

    }
    
    function initFromLocalStorage () {
        console.log("init from local storage");
       if(localStorage["data"]){
            data = JSON.parse(localStorage.getItem("data"));
            $scope.peeCount = data.peeCount;
            $scope.pooCount = data.pooCount;
            $scope.gender = data.gender;
        } else {
            data = {peeCount: 0, pooCount: 0, gender: "male"} ;
            localStorage.setItem("data",JSON.stringify(data));
        }; 
    }
    
    
    
}]);



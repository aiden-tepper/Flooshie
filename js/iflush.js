angular.module("flooshie", [])
.controller("toiletCtrl", ["$scope", "$http", function($scope, $http){
    var gender;
    
    if(localStorage["settings"]){
        var settings = JSON.parse(localStorage.getItem("settings"));
    } else {
        var settings = getPreferences();
        localStorage.setItem("settings",JSON.stringify(settings));
    };
    
    gender = settings.gender;
    
    function getPreferences () {
        return {"gender":"male"}
    }

    
    
    
    $scope.deviceId = "00e04c035ad5";
    $scope.accessToken = "4fdb248ad771e101c196f31e5be93dffaa247d6994ebe490e303c1e55f1970ed";
    $scope.URL = "https://api-http.littlebitscloud.cc/devices/" + $scope.deviceId;
    
    $("#poo").on("click", function(){
        lowerSeat();
    };
                 
    $("#pee").on("click", function(){
        if (gender==“male”) {
		  liftSeat ();
	   } else {
		  lowerSeat ();
	   }
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




var flush = Function() {
    if button=pressed down {
        flush 
        
    }
}

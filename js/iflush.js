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

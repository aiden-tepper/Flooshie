angular.module("flooshie", [])
.controller("toiletCtrl", ["$scope", "$http", function($scope, $http){
    
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

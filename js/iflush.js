angular.module("flooshie", [])
.controller("toiletCtrl", ["$scope", "$http", function($scope, $http){
    
    if(localStorage["flushes"]){
    var flushes = JSON.parse(localStorage.getItem("flushes"));
} else {
    localStorage.setItem("flushes",JSON.stringify({}));
    var flushes = {} ;
};
    
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



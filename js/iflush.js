angular.module("flooshie", [])
.controller("toiletCtrl", ["$scope", "$http", function($scope, $http){
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

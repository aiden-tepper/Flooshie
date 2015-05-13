angular.module("flooshie", [])
.controller("toiletCtrl", ["$scope",function($scope){
    
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

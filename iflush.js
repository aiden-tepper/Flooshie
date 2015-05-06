if(localStorage["todos"]){
    var todos = JSON.parse(localStorage.getItem("todos"));
} else {
    localStorage.setItem("todos",JSON.stringify({}));
    var todos = {} ;
};
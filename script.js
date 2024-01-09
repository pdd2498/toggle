let body = document.getElementById("bodys");


body.addEventListener("click" , (e) =>{
    var cl = document.body;
    var mv = document.getElementById("swit")
    
    cl.classList.toggle("dark-mode");
    mv.classList.toggle("left");

});
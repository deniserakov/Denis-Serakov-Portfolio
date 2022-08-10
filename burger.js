const burgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelectorAll(".burger-menu");
const burgerMenulink= document.querySelectorAll(".burger-menu-link");


for ( const burgers of burgerMenu ){
    burgerBtn.addEventListener("click" , function(e) {
        document.body.classList.toggle("_lock");
        burgerBtn.classList.toggle("_active");
        burgers.classList.toggle("_active");
        burgerMenuClose.classList.toggle("_active");
        
        
    });
    for ( const burgerMenulink1 of  burgerMenulink){
        burgerMenulink1.addEventListener("click" , ()=>{
                document.body.classList.remove("_lock");
                burgerBtn.classList.remove("_active");
                burgers.classList.remove("_active");
        });
        
    }

}







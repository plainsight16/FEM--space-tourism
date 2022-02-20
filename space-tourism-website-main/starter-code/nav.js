const nav = document.querySelector("ul");
const navElements = document.querySelectorAll("ul li");
let navFocus = 0;

nav.addEventListener("keydown", (e) =>{
    const keydownLeft = "ArrowLeft";
    const keydownRight = "ArrowRight";
    if(e.key === keydownLeft || e.key === keydownRight){
        navElements[navFocus].setAttribute("tabindex", -1);
        if (e.key === keydownLeft){
            navFocus--;
            if(navFocus < 0){
                navFocus = (navElements.length - 1);
            }
            console.log(navFocus);
            
        }
        else{
            navFocus++;
            if(navFocus >= navElements.length){
                navFocus = 0;
            }
            console.log(navFocus);
        }

    }
    
    navElements[navFocus].setAttribute("tabindex", 0);
    navElements[navFocus].focus();
    console.log(navFocus);
})
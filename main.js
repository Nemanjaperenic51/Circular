////////////////////    M E N U /////////////////////////


const mainMenu = document.querySelector(".mainMenu");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
}

function close() {
    mainMenu.style.top = "-100%";
}


///////////////////    T O P   B T N////////////////

const topBtn = document.querySelector(".topBtn");
window.addEventListener("scroll", fadeIn);
function fadeIn () {
    if (window.pageYOffset > 100) {
        topBtn.style.display = "block";
    }else {
        topBtn.style.display = "none";
    }
}


topBtn.addEventListener("click", clickbtn);
function clickbtn() {
    window.scrollTo(0,0)
}

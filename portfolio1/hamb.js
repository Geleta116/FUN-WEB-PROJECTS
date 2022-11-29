const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


window.addEventListener("scroll", function(){
    const heads = document.getElementsByClassName("navbar");
    heads.classList.toggle("sticky",window.scrollY>0);
}) 

hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n =>n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }) )

   
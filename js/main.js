const listNav = document.querySelector(".listNav")
const mobileMenu = document.querySelector(".mobile")


mobileMenu.addEventListener("click", function() {
    console.log("click");
    listNav.classList.toggle("menu_desktop");
    
})
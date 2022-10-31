const ham = document.querySelector(".ham");
const li = ham.parentElement;
const textMobile = li.children[2]
ham.addEventListener("click", ()=> {
    li.classList.toggle("activo");  
    li.style.transition = "transform 1s";
    ham.classList.toggle("ham-active")
    textMobile.classList.toggle("texto-mobile-activo")
});


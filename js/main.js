let elButton = document.querySelector(".site-header__button")
let elHeader = document.querySelector(".site-header")

elButton.addEventListener("click", function(){
    elHeader.classList.toggle("site-header--active")
})
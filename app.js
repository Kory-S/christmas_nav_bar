const promoBar = document.querySelector(".promo_bar");
const closing = document.querySelector(".closing");

closing.addEventListener('click', () =>{
    promoBar.outerHTML = "";
})
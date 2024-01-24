const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// for fixed IMage
const fixedImage = document.querySelector(".fixedImage");
const productLst = document.querySelector(".product-list");

const elems = document.querySelectorAll(".elem");
elems.forEach((e)=>{
    e.addEventListener("mouseenter", ()=>{
        fixedImage.style.display = "block"
    })
})
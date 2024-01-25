// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


// for fixed IMage
const fixedImage = document.querySelector("#fixedImage");
const productLst = document.querySelector(".product-list");

const elems = document.querySelectorAll(".elem");
elems.forEach((e)=>{
    e.addEventListener("mouseenter", ()=>{
        const image = e.getAttribute("data-image")
        fixedImage.style.display = "block"
        fixedImage.style.backgroundImage = `url(${image })`
    })
    e.addEventListener("mouseleave", ()=>{
        fixedImage.style.display = "none"
    })
})
$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
    });
});
$(document).ready(function () {
    $('.slider-2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
    });
});
$(document).ready(function () {
    $('.slider-3').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
    });
});

ScrollReveal().reveal('.header__title', { interval: 100, duration: 1500, reset: true });
ScrollReveal().reveal('.header__subtitle', { duration: 2300, reset: true });
ScrollReveal().reveal('.contact__title', { duration: 1500, reset: true });
ScrollReveal().reveal('.contact__icon', { duration: 1700, reset: true });
ScrollReveal().reveal('.haircuts__section', { duration: 1500, reset: true });
ScrollReveal().reveal('.haircuts__title', { duration: 1500, reset: true });
ScrollReveal().reveal('.haircuts__subtitle', { duration: 2000, reset: true });
ScrollReveal().reveal('.haircuts__img-block', { duration: 1200, reset: true });
ScrollReveal().reveal('.news-head', { duration: 1000, reset: true });
ScrollReveal().reveal('.block-1', { duration: 1500, reset: true });
ScrollReveal().reveal('.block-2', { duration: 2500, reset: true });
ScrollReveal().reveal('.block-3', { duration: 3500, reset: true });
ScrollReveal().reveal('.menu__button', { duration: 2000, reset: true });



// gallery

ScrollReveal().reveal('.gallery__title', { duration: 1500, reset: true });
ScrollReveal().reveal('.gallery-card-1', { duration: 1500, reset: true });
ScrollReveal().reveal('.gallery-card-2', { duration: 2000, reset: true });
ScrollReveal().reveal('.gallery-card-3', { duration: 2500, reset: true });
ScrollReveal().reveal('.gallery-card-4', { duration: 1500, reset: true });
ScrollReveal().reveal('.gallery-card-5', { duration: 2000, reset: true });
ScrollReveal().reveal('.gallery-card-6', { duration: 2500, reset: true });
ScrollReveal().reveal('.gallery-card-7', { duration: 1500, reset: true });
ScrollReveal().reveal('.gallery-card-8', { duration: 2000, reset: true });
ScrollReveal().reveal('.gallery-card-9', { duration: 2500, reset: true });




const menuBtn = document.querySelector(".menu__button")
const menu = document.querySelector(".menu")
const line1 = document.querySelector(".line-1")
const line2 = document.querySelector(".line-2")
const line3 = document.querySelector(".line-3")
const menuLink = document.querySelectorAll(".menu__link")
const item1 = document.querySelector('.item-1')
const item2 = document.querySelector('.item-2')
const item3 = document.querySelector('.item-3')
const contactIcon = document.querySelector('.contact__icon')
const contactBackdrop = document.querySelector('.contact__backdrop')
const contactTimesBtn = document.querySelector('.contact__times-btn')




menuBtn.addEventListener('click', function () {
    line1.classList.toggle("change-line-1")
    line2.classList.toggle("change-line-2")
    line3.classList.toggle("change-line-3")
    menu.classList.toggle("menu--show")
    item1.classList.toggle("item-1--change")
    item2.classList.toggle("item-2--change")
    item3.classList.toggle("item-3--change")
})

menuLink.forEach(link => {
    link.addEventListener('click', function () {
        menu.classList.remove("menu--show")
        line1.classList.remove("change-line-1")
        line2.classList.remove("change-line-2")
        line3.classList.remove("change-line-3")
        item1.classList.remove("item-1--change")
        item2.classList.remove("item-2--change")
        item3.classList.remove("item-3--change")
    })
});

contactIcon.addEventListener('click', () => {
    contactBackdrop.classList.add("contact__backdrop--change")
})

contactTimesBtn.addEventListener('click', () => {
    contactBackdrop.classList.remove("contact__backdrop--change")
})

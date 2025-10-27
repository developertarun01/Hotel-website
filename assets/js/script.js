const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

const slides = document.querySelectorAll(".section5-slide");
let oldCounter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goNext = () => {
    oldCounter++;
    if (oldCounter >= slides.length) oldCounter = slides.length - 1; // ✅ Prevent overflow
    slideShow();
};

const goPrev = () => {
    oldCounter--;
    if (oldCounter < 0) oldCounter = 0; // ✅ Prevent negative slide index
    slideShow();
};

const slideShow = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${oldCounter * 100}%)`;
    });
};

// Automatic SLider Start

function runSlider(containerSelector) {

    const container = document.querySelector(containerSelector);
    const slideImages = container.querySelectorAll('.slide-img');
    const dots = container.querySelectorAll('.dot');

    let counter = 0;
    let slideInterval;

    function slideNext() {
        let current = slideImages[counter];
        current.style.animation = 'next1 0.5s ease-in forwards';

        counter = (counter + 1) % slideImages.length;
        let nextSlide = slideImages[counter];
        nextSlide.style.animation = 'next2 0.5s ease-in forwards';

        setTimeout(() => {
            slideImages.forEach(img => img.classList.remove('active'));
            nextSlide.classList.add('active');
            current.style.animation = '';
            nextSlide.style.animation = '';
            updateDots();
        }, 500);
    }

    function updateDots() {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[counter].classList.add('active');
    }

    function startAuto() {
        slideInterval = setInterval(slideNext, 1500);
    }

    container.addEventListener('mouseover', () => clearInterval(slideInterval));
    container.addEventListener('mouseout', startAuto);

    startAuto(); // Start slider
}

// Run two sliders independently & simultaneously

runSlider('.slider1');
runSlider('.slider2');
runSlider('.slider3');
runSlider('.slider4');
runSlider('.slider5');
runSlider('.slider6');
runSlider('.slider0');

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

let slideImages = document.querySelectorAll('.slide-img');
let dots = document.querySelectorAll('.dot');
let counter = 0;
let slideInterval;

// Show initial image
slideImages[counter].classList.add('active');

// Function to handle sliding with animation
function slideNext() {
    let current = slideImages[counter];
    current.style.animation = 'next1 0.5s ease-in forwards';

    counter = (counter + 1) % slideImages.length;
    let nextSlide = slideImages[counter];

    nextSlide.style.animation = 'next2 0.5s ease-in forwards';

    // Wait for animation to end to update active class
    setTimeout(() => {
        slideImages.forEach(img => img.classList.remove('active'));
        nextSlide.classList.add('active');
        current.style.animation = '';
        nextSlide.style.animation = '';
        updateIndicators();
    }, 500);
}

// Auto sliding
function autoSliding() {
    slideInterval = setInterval(slideNext, 2000); // 3s for better visibility
}
autoSliding();

// Pause on hover
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', () => clearInterval(slideInterval));
container.addEventListener('mouseout', autoSliding);

// Update dots
function updateIndicators() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[counter].classList.add('active');
}

// Dot click
function switchImage(currentDot) {
    let imageId = parseInt(currentDot.getAttribute('attr'));
    if (imageId === counter) return;

    let current = slideImages[counter];
    let nextSlide = slideImages[imageId];

    if (imageId > counter) {
        current.style.animation = 'next1 0.5s ease-in forwards';
        nextSlide.style.animation = 'next2 0.5s ease-in forwards';
    } else {
        current.style.animation = 'prev1 0.5s ease-in forwards';
        nextSlide.style.animation = 'prev2 0.5s ease-in forwards';
    }

    setTimeout(() => {
        slideImages.forEach(img => img.classList.remove('active'));
        nextSlide.classList.add('active');
        current.style.animation = '';
        nextSlide.style.animation = '';
        counter = imageId;
        updateIndicators();
    }, 500);
}


// Automatic SLider End 

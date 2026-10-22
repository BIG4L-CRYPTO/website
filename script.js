const company = "DOVATECH GENERAL SUPPLY";
console.log(company);

const slides = document.querySelectorAll(".slides img");

let currentSlide = 0;

function showNextSlide() {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides.forEach(function(slide) {
        slide.style.display = "none";
    });

    slides[currentSlide].style.display = "block";
}

if (slides.length > 0) {
    slides.forEach(function(slide) {
        slide.style.display = "none";
    });

    slides[0].style.display = "block";

    setInterval(showNextSlide, 4000);
}
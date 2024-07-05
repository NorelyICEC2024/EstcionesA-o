const slideIndexes = {
    primavera: 0,
    verano: 0,
    otono: 0,
    invierno: 0
};

function showSlide(season, index) {
    const slides = document.querySelectorAll(`#slider-${season} .slide`);
    if (index >= slides.length) {
        slideIndexes[season] = 0;
    } else if (index < 0) {
        slideIndexes[season] = slides.length - 1;
    } else {
        slideIndexes[season] = index;
    }
    const slider = document.querySelector(`#slider-${season} .slider`);
    slider.style.transform = `translateX(-${slideIndexes[season] * 100}%)`;
}

function moveSlide(season, step) {
    showSlide(season, slideIndexes[season] + step);
}

// Inicializa todos los sliders
showSlide('primavera', slideIndexes['primavera']);
showSlide('verano', slideIndexes['verano']);
showSlide('otono', slideIndexes['otono']);
showSlide('invierno', slideIndexes['invierno']);

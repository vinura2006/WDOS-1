
    // slider wrapper
    const sliderWrapper = document.querySelector('.hot-deals-wrapper');
    const images = sliderWrapper ? sliderWrapper.querySelectorAll('img') : [];

    // choose the next,previous bttons
    const nextButton = document.querySelector('.nav-right');
    const prevButton = document.querySelector('.nav-left');

    // recognizing the current number to track the active image
    let currentIndex = 0;

    // show the current image
    function updateSlider() {
        if (!images.length) return; // Exit if no images
        sliderWrapper.style.transform = `translateX(-${currentIndex * 1000}px)`; // width
    }

    // for the next button
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            if (!images.length) return; // Exit if there no images
            currentIndex = (currentIndex + 1) % images.length; // Move  the next image
            updateSlider(); //  slider
        });
    }

    // for the previous button
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            if (!images.length) return; // Exit if there no images
            currentIndex = (currentIndex - 1 + images.length) % images.length; // Move to the previous img
            updateSlider(); //  slider
        });
    }

    //  showing the first image
    updateSlider();


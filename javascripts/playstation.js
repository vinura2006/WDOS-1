document.querySelectorAll('.ps-button').forEach(button => {
    button.addEventListener('click', () => {
        const ps = button.getAttribute('data-ps');
        const activeImage = document.querySelector('.ps-image.active');
        const newImage = document.getElementById(`ps-${ps}`);

        // Slide out the image
        activeImage.style.opacity = 0;
        activeImage.style.transition = 'opacity 0.5s ease-out';

        // Slide in new image
        setTimeout(() => {
            activeImage.classList.remove('active');
            newImage.classList.add('active');
            newImage.style.opacity = 1;
            newImage.style.transition = 'opacity 0.5s ease-in';
        }, 500); //  opacity transition
    });
});

document.querySelectorAll('.ps-button').forEach(button => {
    button.addEventListener('click', () => {
        const ps = button.getAttribute('data-ps');
        const activeWrapper = document.querySelector('.image-wrapper.active');
        const newWrapper = document.getElementById(`wrapper-ps-${ps}`);

        // previous wrapper
        activeWrapper.classList.remove('active');
        activeWrapper.style.opacity = 0;

        //  wrapper new
        newWrapper.classList.add('active');
        setTimeout(() => newWrapper.style.opacity = 1, 10); // transition
    });
});


document.querySelectorAll('.xbox-button').forEach(button => {
    button.addEventListener('click', () => {
        const xbox = button.getAttribute('data-xbox');
        const activeImage = document.querySelector('.xbox-image.active');
        const newImage = document.getElementById(`xbox-${xbox}`);

        // Slide out the image
        activeImage.style.opacity = 0;
        activeImage.style.transition = 'opacity 0.5s ease-out';

        // Slide in the new image 
        setTimeout(() => {
            activeImage.classList.remove('active');
            newImage.classList.add('active');
            newImage.style.opacity = 1;
            newImage.style.transition = 'opacity 0.5s ease-in';
        }, 500); //  opacity transition
    });
});

document.querySelectorAll('.xbox-button').forEach(button => {
    button.addEventListener('click', () => {
        const xbox = button.getAttribute('data-xbox');
        const activeWrapper = document.querySelector('.image-wrapper.active');
        const newWrapper = document.getElementById(`wrapper-xbox-${xbox}`);

        // previous wrapper
        activeWrapper.classList.remove('active');
        activeWrapper.style.opacity = 0;

        //  wrapper new
        newWrapper.classList.add('active');
        setTimeout(() => newWrapper.style.opacity = 1, 10); 
    });
});
// ninetendo 
let currentIndex = 0;

function slideLeft() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    updateCarousel(carousel, items);
}

function slideRight() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    updateCarousel(carousel, items);
}

function updateCarousel(carousel, items) {
    const offset = -currentIndex * 100; 
    carousel.style.transform = `translateX(${offset}%)`;
}
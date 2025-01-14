document.addEventListener('DOMContentLoaded', () => {
    const initializeSlider = (wrapper) => {
      const grid = wrapper.querySelector('.trending-grid');
      const slides = grid.querySelectorAll('.game-card');
      const prevBtn = wrapper.querySelector('.prev');
      const nextBtn = wrapper.querySelector('.next');
      const slidesPerView = 4;
      let currentIndex = 0;
      
      const totalSlides = Math.max(0, slides.length - slidesPerView);
      
      const updateSliderPosition = () => {
        const offset = (currentIndex * (100 / slidesPerView));
        grid.style.transform = `translateX(-${offset}%)`;
        
        // button states
        prevBtn.style.opacity = currentIndex <= 0 ? '0.5' : '1';
        prevBtn.style.cursor = currentIndex <= 0 ? 'default' : 'pointer';
        nextBtn.style.opacity = currentIndex >= totalSlides ? '0.5' : '1';
        nextBtn.style.cursor = currentIndex >= totalSlides ? 'default' : 'pointer';
      };

      const slideNext = () => {
        if (currentIndex < totalSlides) {
          currentIndex++;
          updateSliderPosition();
        }
      };

      const slidePrev = () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateSliderPosition();
        }
      };

      prevBtn.addEventListener('click', slidePrev);
      nextBtn.addEventListener('click', slideNext);
      
      //  position
      updateSliderPosition();
    };

    //  sliders
    document.querySelectorAll('.trending-wrapper').forEach(initializeSlider);
  });



  // for scroll by button

const quickLinks = document.querySelectorAll('.quick-links .link-item');

quickLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the section name 
        const sectionName = this.textContent.replace('→', '').trim().toLowerCase();
        
        // Find the section
        let targetSection;
        switch(sectionName) {
            case 'game collection':
                targetSection = document.querySelector('.game-collection');
                break;
            case 'upcoming games':
                targetSection = document.querySelector('.upcoming-games');
                break;
            case 'explore the latest console releases':
                targetSection = document.querySelector('.console-releases');
                break;
            case 'pre-owned deals':
                targetSection = document.querySelector('.pre-owned');
                break;
        }

        // Scroll to the section
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

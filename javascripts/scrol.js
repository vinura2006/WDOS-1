
document.addEventListener('DOMContentLoaded', function() {
    // quick link buttons
    const quickLinks = document.querySelectorAll('.quick-links .link-item');
    
    // Add click to each link
    quickLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section from the text
            const linkText = this.textContent.replace('→', '').trim().toLowerCase();
            let targetSection;
            
            // Map link to sections
            switch(linkText) {
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
            
            //  scroll to section
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
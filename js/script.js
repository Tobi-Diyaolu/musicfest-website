document.addEventListener('DOMContentLoaded', () => {

    // -----------------------------------
    // 1. Hero Text Fade-In Animation
    // -----------------------------------
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.classList.add('fade-in');
    }

    // -----------------------------------
    // 2. Smooth Scrolling For Anchor Links
    // -----------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // -----------------------------------
    // 3. Artist Card Click Events
    // -----------------------------------
    document.querySelectorAll('.artist-card').forEach(card => {
        card.addEventListener('click', () => {
            const caption = card.querySelector('figcaption').textContent;
            alert(`Learn more about ${caption}!`);
        });
    });

});
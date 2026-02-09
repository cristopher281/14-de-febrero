document.addEventListener('DOMContentLoaded', () => {

    // Create Hearts Container
    const heartContainer = document.createElement('div');
    heartContainer.classList.add('hearts-container');
    document.body.appendChild(heartContainer);

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️'; // Or use SVG/Image

        // Randomize
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 6 + 's'; // 6-9s
        heart.style.fontSize = Math.random() * 1 + 0.5 + 'rem'; // 0.5-1.5rem

        heartContainer.appendChild(heart);

        // Cleanup
        setTimeout(() => {
            heart.remove();
        }, 9000);
    }

    // Spawn hearts
    setInterval(createHeart, 800);

    // Intersection Observer for Fade-In Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth Scroll behavior is handled by CSS, but we can ensure it for specific links if added later.
    // Also, a little initial fade for the Hero section to ensure it loads gracefully.
    const hero = document.querySelector('.hero');
    if (hero) {
        setTimeout(() => {
            hero.classList.add('visible');
        }, 300);
    }
});

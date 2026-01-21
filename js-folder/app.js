// NAVBAR JS 



const nav = document.getElementById('main-nav');
const trigger = document.getElementById('nav-trigger');

// Helper: check if device is mobile size
function isMobile() {
    return window.innerWidth <= 768;
}

/* -------------------------
   DESKTOP: HOVER BEHAVIOR
-------------------------- */
trigger.addEventListener('mouseenter', () => {
    if (!isMobile()) {
        nav.classList.add('reveal');
        trigger.style.pointerEvents = 'none';
    }
});

nav.addEventListener('mouseleave', () => {
    if (!isMobile()) {
        nav.classList.remove('reveal');
        trigger.style.pointerEvents = 'auto';
    }
});

/* -------------------------
   MOBILE + DESKTOP: TAP
-------------------------- */
trigger.addEventListener('click', (e) => {
    nav.classList.toggle('reveal');

    if (nav.classList.contains('reveal')) {
        trigger.style.pointerEvents = 'none';
    } else {
        trigger.style.pointerEvents = 'auto';
    }

    e.stopPropagation();
});

// Prevent nav clicks from closing it
nav.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Click outside closes nav
document.addEventListener('click', () => {
    nav.classList.remove('reveal');
    trigger.style.pointerEvents = 'auto';
});

// Safety: reset trigger if screen is resized
window.addEventListener('resize', () => {
    nav.classList.remove('reveal');
    trigger.style.pointerEvents = 'auto';
});










// mouse scroll naimation 
const scrollIndicator = document.querySelector('.scroll-indicator');
const nextSection = document.querySelector('#collection-preview-section');

if (scrollIndicator && nextSection) {
    scrollIndicator.addEventListener('click', () => {
        nextSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
}










/* collection preview section  */
// Intersection Observer for the Preview Section
const previewSection = document.querySelector('.preview-viewport');

const previewObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // "Gentle fade-in transitions only" [cite: 12]
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

// Initial state for the transition
previewSection.style.opacity = "0";
previewSection.style.transform = "translateY(30px)";
previewSection.style.transition = "opacity 2s ease, transform 2s ease";

previewObserver.observe(previewSection);






// next page animation js 
const sideNav = document.querySelector('.side-navigation');

sideNav.addEventListener('click', () => {
    window.location.href = '/next-page.html';
});

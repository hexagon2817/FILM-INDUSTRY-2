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





// mouse navigation 
document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("next-section");

  if (!scrollBtn) return;

  scrollBtn.addEventListener("click", () => {
    const currentSection = scrollBtn.closest("section");
    const nextSection = currentSection?.nextElementSibling;

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});










// footer bottom navigation button 
const backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", () => {
  backToTop.style.pointerEvents = "none";

  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    setTimeout(() => {
      backToTop.style.pointerEvents = "auto";
    }, 1000);
  }, 120);
});

















// look-viewport section 
function toggleDetails(id) {
    const section = document.getElementById(id);
    section.classList.toggle('is-active');
}




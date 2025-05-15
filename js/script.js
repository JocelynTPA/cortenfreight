/* script for mobile menu ends here */
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const menuClose = document.getElementById('close-menu');
    const menu = document.getElementById('mobile-menu');
    const body = document.body;

    function closeMenu() {
        body.classList.remove('menu-open');
        menu.classList.add('opacity-0');
        menu.style.maxHeight = '0px';
        menu.addEventListener('transitionend', function handler() {
            menu.classList.add('invisible');
            menu.removeEventListener('transitionend', handler);
        });
    }

    if (menuToggle && menuClose && menu) {
        // Open mobile menu
        menuToggle.addEventListener('click', () => {
            body.classList.add('menu-open');
            menu.classList.remove('invisible', 'opacity-0', 'max-h-0');
            menu.classList.add('opacity-100');
            menu.style.maxHeight = menu.scrollHeight + 'px';
        });

        // Close mobile menu
        menuClose.addEventListener('click', () => {
            closeMenu();
        });

        // Close on resize if window exceeds 768px
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && menu.classList.contains('opacity-100')) {
                closeMenu();
            }
        });
    }
});
/* script for mobile menu ends here */

/* script for paralax effect starts here */
document.addEventListener("DOMContentLoaded", function () {
    const parallaxSectionsTop = document.querySelectorAll('.hero-bg');
    const parallaxSections = document.querySelectorAll('.home-middle-image-section, .home-bottom-image-section');

    function getSpeed(type) {
        const width = window.innerWidth;

        if (type === 'top') {
            if (width < 768) return 0.05;       // mobile header
            if (width < 1024) return 0.1;        // tablet header
            return 0.15;                         // desktop header
        } else {
            if (width < 768) return 0.08;         // mobile
            if (width < 1024) return 0.5;        // tablet
            return 0.7;                          // desktop
        }
    }

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        const speedTop = getSpeed('top');
        parallaxSectionsTop.forEach(section => {
            const offset = section.offsetTop;
            const distance = scrollTop - offset;
            section.style.backgroundPosition = `center ${distance * speedTop}px`;
        });

        const speedMiddle = getSpeed('middle');
        parallaxSections.forEach(section => {
            const offset = section.offsetTop;
            const distance = scrollTop - offset;
            section.style.backgroundPosition = `center ${distance * speedMiddle}px`;
        });
    });
});
/* script for paralax effect ends here */



/* script for mobile starts here */
document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('quote-modal');
    const body = document.body;

    document.querySelectorAll('.request-quote-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            body.classList.add('body-modal-open');
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            body.classList.remove('body-modal-open');
        }
    });

    document.getElementById('quote-form').addEventListener('submit', (e) => {
        e.preventDefault();
        if (!e.target.agree.checked) {
            alert('You must agree to the terms.');
            return;
        }
        alert('Form submitted! ');
    });
});
/* script for mobile ends here */
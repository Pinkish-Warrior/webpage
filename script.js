const toggleButton = document.getElementById('dark-mode-toggle');
const rootEl = document.documentElement;

const applyTheme = () => {
    if (!rootEl || !toggleButton) return;
    const isDarkMode = localStorage.getItem('theme') === 'dark-mode';
    if (isDarkMode) {
        rootEl.classList.add('dark-mode');
        toggleButton.checked = true;
    } else {
        rootEl.classList.remove('dark-mode');
        toggleButton.checked = false;
    }
};

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        if (toggleButton.checked) {
            rootEl.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            rootEl.classList.remove('dark-mode');
            localStorage.setItem('theme', '');
        }
    });
}

applyTheme();

const contactBtn = document.getElementById('contact-btn');
const ariaLiveRegion = document.getElementById('aria-live-region');

if (contactBtn && ariaLiveRegion) {
    contactBtn.addEventListener('click', (e) => {
        e.preventDefault();

        ariaLiveRegion.textContent = 'Confetti!';

        if (typeof confetti === 'function') {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
        
        setTimeout(() => {
            window.location.href = 'mailto:tanrosa@gmail.com';
            setTimeout(() => {
                ariaLiveRegion.textContent = '';
            }, 500);
        }, 1000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const heroImage = document.getElementById('hero-image');
    if (heroImage) {
        const images = [
            'images/mountain0.png',
            'images/mountain1.png',
            'images/mountain2.png',
            'images/mountain3.png',
            'images/mountain4.png',
            'images/mountain4.png'
        ];
        const randomIndex = Math.floor(Math.random() * images.length);
        heroImage.src = images[randomIndex];
    }
});

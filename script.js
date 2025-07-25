document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check for saved preference in localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
    }

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', '');
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });

    const contactBtn = document.getElementById('contact-btn');
    const ariaLiveRegion = document.getElementById('aria-live-region');

    contactBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // Announce to screen reader
        ariaLiveRegion.textContent = 'Confetti!';

        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        setTimeout(() => {
            window.location.href = 'mailto:tanrosa@gmail.com';
            // Clear the text after a bit so it can be re-announced if needed
            setTimeout(() => {
                ariaLiveRegion.textContent = '';
            }, 500);
        }, 1000);
    });
});
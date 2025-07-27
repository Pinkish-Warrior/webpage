document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const rootEl = document.documentElement;

    // This function applies the theme and updates the toggle's state.
    const applyTheme = () => {
        const isDarkMode = localStorage.getItem('theme') === 'dark-mode';
        if (isDarkMode) {
            rootEl.classList.add('dark-mode');
            toggleButton.checked = true;
        } else {
            rootEl.classList.remove('dark-mode');
            toggleButton.checked = false;
        }
    };

    // This function handles the click event on the toggle.
    toggleButton.addEventListener('click', () => {
        if (toggleButton.checked) {
            rootEl.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            rootEl.classList.remove('dark-mode');
            localStorage.setItem('theme', '');
        }
    });

    // Apply the correct theme as soon as the DOM is loaded.
    applyTheme();

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
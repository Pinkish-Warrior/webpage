
document.addEventListener('DOMContentLoaded', () => {
    const chatbotToggler = document.getElementById('chatbot-toggler');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotCloseBtn = document.getElementById('chatbot-close-btn');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSendBtn = document.getElementById('chatbot-send-btn');
    const chatbotMessages = document.getElementById('chatbot-messages');

    const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs.",
        "Why was the JavaScript developer sad? Because he didn't Node how to Express himself.",
        "What's a programmer's favorite hangout place? Foo Bar.",
        "Why did the programmer quit his job? Because he didn't get arrays.",
        "How many programmers does it take to change a light bulb? None, that's a hardware problem."
    ];

    const aboutMe = [
        "I'm Tania, a junior software developer based in London. I'm passionate about coding and always eager to learn new things.",
        "I have experience with Python, Go, JavaScript, C, SQL, HTML, and CSS.",
        "I'm also interested in cybersecurity and secure coding practices.",
        "When I'm not coding, I enjoy motorcycling, drawing, and volunteering."
    ];

    const displayMessage = (message, sender) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chatbot-message', `${sender}-message`);
        messageElement.textContent = message;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    };

    const handleUserInput = () => {
        const userInput = chatbotInput.value.trim().toLowerCase();
        if (userInput) {
            displayMessage(userInput, 'user');
            chatbotInput.value = '';

            if (userInput.includes('joke')) {
                const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
                setTimeout(() => displayMessage(randomJoke, 'bot'), 500);
            } else if (userInput.includes('about')) {
                const randomFact = aboutMe[Math.floor(Math.random() * aboutMe.length)];
                setTimeout(() => displayMessage(randomFact, 'bot'), 500);
            } else {
                setTimeout(() => displayMessage("I can tell you a tech joke or something about me. Just ask!", 'bot'), 500);
            }
        }
    };

    chatbotToggler.addEventListener('click', () => {
        chatbotContainer.classList.toggle('open');
    });

    chatbotCloseBtn.addEventListener('click', () => {
        chatbotContainer.classList.remove('open');
    });

    chatbotSendBtn.addEventListener('click', handleUserInput);

    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
});

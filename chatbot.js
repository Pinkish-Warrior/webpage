
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
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "What's the object-oriented way to become wealthy? Inheritance.",
    "Why don't programmers like nature? It has too many bugs.",
    "I would tell you a UDP joke, but you might not get it.",
    "There are 10 types of people in the world: those who understand binary, and those who don't.",
    "Why do Java developers wear glasses? Because they don't C#."
];

const aboutMe = [
    `By day I squash bugs in code. By night, I negotiate bedtime treaties. <br> Somewhere in between, I sip a coffee like it is version control for my sanity`,
    `I have enough life experience to know when to Google, when to guess, and when to walk away and blame cache`,
    `Learning to code while parenting is a great prep for tech - I already speak fluent nonsense, handle unpredictable crashes, and document everything nobody ever reads`,
    `I juggle parenting, patching bugs, and powering through pull requests - all while pretending I didn't just learn what an API was last month`
];

const displayMessage = (message, sender) => {
    if (!chatbotMessages) return;
    const messageElement = document.createElement('div');
    messageElement.classList.add('chatbot-message', `${sender}-message`);
    messageElement.innerHTML = message; // Use innerHTML to render line breaks
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
};

const handleUserInput = () => {
    if (!chatbotInput) return;
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

if (chatbotToggler) {
    chatbotToggler.addEventListener('click', () => {
        chatbotContainer.classList.toggle('open');
        const isExpanded = chatbotToggler.getAttribute('aria-expanded') === 'true';
        chatbotToggler.setAttribute('aria-expanded', !isExpanded);
    });
}

if (chatbotCloseBtn) {
    chatbotCloseBtn.addEventListener('click', () => {
        chatbotContainer.classList.remove('open');
        chatbotToggler.setAttribute('aria-expanded', 'false');
    });
}

if (chatbotSendBtn) {
    chatbotSendBtn.addEventListener('click', handleUserInput);
}

if (chatbotInput) {
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
}

const chatToggle = document.getElementById('chat-toggle');
const chatClose = document.getElementById('chat-close');
const chatbot = document.getElementById('chatbot');
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatbox = document.getElementById('chatbox');

// Ouvrir le chatbot
chatToggle.addEventListener('click', () => {
  chatbot.classList.add('open');
  chatToggle.style.display = 'none';
});

// Fermer le chatbot
chatClose.addEventListener('click', () => {
  chatbot.classList.remove('open');
  chatToggle.style.display = 'block';
});

// Fonction pour envoyer un message
function sendMessage() {
  const message = userInput.value.trim();
  if (message === '') return;

  // Message utilisateur
  const userMsg = document.createElement('div');
  userMsg.textContent = "Vous: " + message;
  userMsg.style.textAlign = 'right';
  userMsg.style.marginBottom = '10px';
  chatbox.appendChild(userMsg);

  // Réponse automatique
  const botMsg = document.createElement('div');
  botMsg.textContent = "Bot: Merci pour votre message !";
  botMsg.style.textAlign = 'left';
  botMsg.style.marginBottom = '10px';
  chatbox.appendChild(botMsg);

  chatbox.scrollTop = chatbox.scrollHeight;
  userInput.value = '';
}

// Envoyer avec bouton
sendBtn.addEventListener('click', sendMessage);

// Envoyer avec touche Entrée
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

// Récupérer les éléments
const chatToggle = document.getElementById('chat-toggle');
const chatClose = document.getElementById('chat-close');
const chatbot = document.getElementById('chatbot');
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatbox = document.getElementById('chatbox');

// Ouvrir le chatbot
chatToggle.addEventListener('click', () => {
  chatbot.style.display = 'flex';
  chatToggle.style.display = 'none';
});

// Fermer le chatbot
chatClose.addEventListener('click', () => {
  chatbot.style.display = 'none';
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

  chatbox.scrollTop = chatbox.scrollHeight; // scroll en bas
  userInput.value = '';
}

// Écoute du clic sur Envoyer
sendBtn.addEventListener('click', sendMessage);

// Écoute de la touche "Entrée"
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

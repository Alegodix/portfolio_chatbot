// Récupérer les éléments
const chatToggle = document.getElementById('chat-toggle');
const chatbot = document.getElementById('chatbot');
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatbox = document.getElementById('chatbox');

// Fonction pour basculer l'affichage du chatbot
chatToggle.addEventListener('click', () => {
  if (chatbot.style.display === 'none' || chatbot.style.display === '') {
    chatbot.style.display = 'flex'; // Affiche le chatbot
    chatToggle.style.display = 'none'; // Cache le bouton
  }
});

// Fonction pour envoyer un message
function sendMessage() {
  const message = userInput.value.trim();
  if (message === '') return;

  // Ajouter le message utilisateur
  const userMsg = document.createElement('div');
  userMsg.textContent = "Vous: " + message;
  userMsg.style.textAlign = 'right';
  userMsg.style.marginBottom = '10px';
  chatbox.appendChild(userMsg);

  // Réponse automatique du chatbot
  const botMsg = document.createElement('div');
  botMsg.textContent = "Bot: Merci pour votre message !";
  botMsg.style.textAlign = 'left';
  botMsg.style.marginBottom = '10px';
  chatbox.appendChild(botMsg);

  chatbox.scrollTop = chatbox.scrollHeight; // Scroll en bas
  userInput.value = '';
}

// Écoute du clic sur le bouton Envoyer
sendBtn.addEventListener('click', sendMessage);

// Écoute de la touche "Entrée"
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

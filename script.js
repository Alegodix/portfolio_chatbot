const toggleBtn = document.getElementById('chat-toggle');
const chatbot = document.getElementById('chatbot');

toggleBtn.addEventListener('click', () => {
  if(chatbot.style.display === 'flex') {
    chatbot.style.display = 'none';
  } else {
    chatbot.style.display = 'flex';
  }
});

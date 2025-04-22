function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('visible');
}

document.querySelectorAll('.list-item[data-type]').forEach(item => {
  item.addEventListener('click', () => {
    const name = item.getAttribute('data-name');
    const type = item.getAttribute('data-type');
    document.getElementById('chatTitle').innerHTML = `<strong>${type === 'group' ? '#' : '👤'} ${name}</strong>`;
    document.getElementById('chatMessages').innerHTML = `<div class="chat-message">💬 Megnyitva: ${type === 'group' ? 'Csoport' : 'Privát'} - ${name}</div>`;
  });
});

document.getElementById('sendMessage').addEventListener('click', () => {
  const input = document.getElementById('messageInput');
  if (input.value.trim()) {
    const msg = document.createElement('div');
    msg.className = 'chat-message';
    msg.textContent = `👤 Te: ${input.value}`;
    document.getElementById('chatMessages').appendChild(msg);
    input.value = '';
    document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;
  }
});

document.getElementById('createGroup').addEventListener('click', () => {
  document.getElementById('groupModal').style.display = 'block';
});

function closeGroupModal() {
  document.getElementById('groupModal').style.display = 'none';
}

document.querySelector('.auth-box button').addEventListener('click', () => {
  document.getElementById('authForm').style.display = 'none';
});
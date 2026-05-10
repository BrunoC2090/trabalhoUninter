// Mobile nav
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('open');
});
document.querySelectorAll('nav ul a').forEach(a => {
  a.addEventListener('click', () => document.querySelector('nav ul').classList.remove('open'));
});

// Form
document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  const status = document.getElementById('form-status');
  const nome = this.nome.value.trim();
  const email = this.email.value.trim();
  const msg = this.msg.value.trim();

  if (!nome || !email || !msg) {
    status.style.color = '#c0392b';
    status.textContent = 'Preencha todos os campos.';
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.style.color = '#c0392b';
    status.textContent = 'E-mail inválido.';
    return;
  }

  const btn = this.querySelector('button');
  btn.textContent = 'Enviando...';
  btn.disabled = true;

  setTimeout(() => {
    status.style.color = '';
    status.textContent = 'Mensagem enviada! Retorno em breve.';
    btn.textContent = 'Enviar mensagem';
    btn.disabled = false;
    this.reset();
  }, 1000);
});

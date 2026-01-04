console.log("Portfólio carregado com sucesso!");

// ===== Persistir modo escuro =====
const toggleButton = document.getElementById('toggle-theme');

// Aplica o tema salvo ao carregar a página
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
}

// Alterna o tema ao clicar
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
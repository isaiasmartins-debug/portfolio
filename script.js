console.log("Portfólio carregado com sucesso!");

const btn = document.getElementById("toggle-theme");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const display = document.getElementById("display");
const botoes = document.querySelector(".botoes");

botoes.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return;

  const valor = e.target.dataset.value;
  const acao = e.target.dataset.action;

  if (valor) {
    display.value += valor;
  }

  if (acao === "clear") {
    display.value = "";
  }

  if (acao === "delete") {
    display.value = display.value.slice(0, -1);
  }

  if (acao === "equals") {
    calcular();
  }
});

document.addEventListener("keydown", (e) => {
  if ((e.key >= 0 && e.key <= 9) || "+-*/.".includes(e.key)) {
    display.value += e.key;
  }

  if (e.key === "Enter") {
    calcular();
  }

  if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }

  if (e.key === "Escape") {
    display.value = "";
  }
});

function calcular() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Erro";
  }
}

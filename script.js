const biscoitoClosed = document.querySelector(".biscoito-fechado");
const buttonOpenBiscoito = document.querySelector(".button");
const home = document.querySelector("#home");
const sorte = document.querySelector("#sorte");
const messageSorte = document.querySelector(".message-sorte");

// Eventos de click
biscoitoClosed.addEventListener("click", function (e) {
  e.preventDefault();

  home.classList.add("invisible");
  sorte.classList.remove("invisible");

  frasesAleatorias();
});

buttonOpenBiscoito.addEventListener("click", function () {
  home.classList.remove("invisible");
  sorte.classList.add("invisible");
});

//Array com as mensagens da sorte
const messageList = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "A vida trará coisas boas se tiveres paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
];

function frasesAleatorias() {
  const totalMessages = messageList.length;
  const messageAleatorias = Math.round(Math.random() * totalMessages);

  messageSorte.innerHTML = messageList[messageAleatorias];
}

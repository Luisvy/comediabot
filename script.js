let jokeIndex = 0;
const jokes = [
  [
    "¿Qué le dice un semáforo a otro? ",
    "¡No me mires, que me estoy cambiando!",
  ],
  ["¿Por qué el televisor cruzó la carretera?", "Para ser pantalla plana."],
  ["¿Cómo estornuda un tomate?", "¡Ketchup!"],
  [
    "¿Por qué las matemáticas no se llevan bien con la jardinería?",
    "Porque hay muchas raíces cuadradas.",
  ],
  ["¿Qué le dice un pez a otro?", "¡Nada!"],
];
const chatContent = document.querySelector(".chat-content");
let jokeButton = document.getElementById("requestJokeButton");

function appendBotMessage(messageText) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot-message";

  const avatar = document.createElement("div");
  avatar.className = "fas fa-robot message-avatar";

  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = messageText;

  messageDiv.append(avatar, contentDiv);
  chatContent.appendChild(messageDiv);

  chatContent.scrollTop = chatContent.scrollHeight;
}

function appendUserMessage() {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message user-message";
  const avatar = document.createElement("div");
  avatar.className = "fas fa-smile message-avatar";
  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = "Dime un chiste";
  messageDiv.append(contentDiv, avatar);
  chatContent.appendChild(messageDiv);
}
appendBotMessage("Buenas, soy un bot de chistes. ¿Quieres escuchar uno?");

function requestJoke() {
  // Función para solicitar un chiste
  appendUserMessage();
  if (jokeIndex >= jokes.length) {
    appendBotMessage("Estoy triste, se me han acabado los chistes.");
    return;
  }
  setTimeout(function () {
    appendBotMessage("Vale, tengo uno para ti...");
  }, 1000);

  setTimeout(function () {
    appendBotMessage(jokes[jokeIndex][0]);
  }, 1500);

  setTimeout(function () {
    appendBotMessage(jokes[jokeIndex][1]);
    jokeIndex++;
    jokeButton.style.display = "inline-block";
  }, 2000);

  jokeButton.style.display = "none";
}

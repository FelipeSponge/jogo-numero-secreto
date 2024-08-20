const elementoChute = document.querySelector("#chute");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeack);

function onSpeack(e) {
  const chute = e.results[0][0].transcript;
  exibeChuteNaTela(chute);
  verificaSeOChutePossuiUmValorValido(chute);
}

function exibeChuteNaTela(chute) {
  elementoChute.innerHTML = `
    <div>Voce disse:</div>
    <span class="box">${chute}</span>
  `;
}

recognition.addEventListener("end", () => recognition.start());

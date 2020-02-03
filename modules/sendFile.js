export default function sendFile(cifrado, numero_casas, decifrado, resumo_criptografico, token) {
  const answerObject = {
    numero_casas: Number(numero_casas),
    token: token,
    cifrado,
    decifrado,
    resumo_criptografico,
  };

  const answer = JSON.stringify(answerObject);

  const fileAnswer = new File([answer], "answer.json", {
    type: "application/json"
  });

  var formData = new FormData();
  formData.append("answer", fileAnswer);

  var request = new XMLHttpRequest();
  request.open(
    "POST",
    `https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=${token}`
  );
  request.send(formData);

  function handleResponse(response) {
    const notification = document.querySelector("#info");
    notification.innerText = response;
  }
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      handleResponse(request.responseText);
    } else {
      handleResponse(request.responseText);
    }
  };
}
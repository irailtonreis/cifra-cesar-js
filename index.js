import decodeFrase from './modules/decodeFrase.js';
import sendFile from './modules/sendFile.js';


const token = 'dc667b8bbd894797bf1a7ee1cbfbfad1264aa422';

async function getDesafio(){
  const data = await fetch(
    `https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${token}`
  );
  const response = await data.json();

  const cifrado =  response.cifrado;
  const numero_casas =  response.numero_casas;
  const decifrado = decodeFrase(cifrado, numero_casas);
  const resumo_criptografico = sha1(decifrado);
  
  sendFile(cifrado, numero_casas, decifrado, resumo_criptografico, token);
}

const btn = document.querySelector("button");

btn.addEventListener('click', event => {
  getDesafio();
});









export default function decodeFrase(frase, numero) {
  const arrayText = frase.toLowerCase().split('');
  const decriptArray = arrayText.map(char => {
    let contador = '';
    const code = char.charCodeAt();

    if (code >= 97 && code <= 122) {
      if (code - numero < 97) {
        contador = String.fromCharCode(code - numero + 122 - 97 + 1);
      } else {
        contador = String.fromCharCode(code - numero);
      }
    } else if (code === 32) {
      contador = ' ';
    } else if (code === 58) {
      contador = String.fromCharCode(code);
    } else if (code === 46) {
      contador = String.fromCharCode(code);
    }
    return contador;
  });

  const encryptedResult = decriptArray.join('');
  return encryptedResult;
};
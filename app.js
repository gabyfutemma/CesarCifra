var text = prompt('Digite alguma palavra');
var shift = 33;
var encrypted = [];
var decrypted = [];

function cipher(str) {
  if (str === '' || !isNaN(str)) {
    alert('Por favor, digite apenas letras');
    return;
  } else {
    for (var i = 0; i < str.length; i++) {
      var asciiCodeC = str.charCodeAt(i);
      if (asciiCodeC >= 65 && asciiCodeC <= 90) {
        encrypted.push(String.fromCharCode((asciiCodeC - 65 + shift) % 26 + 65));
      } else if (asciiCodeC >= 97 && asciiCodeC <= 122) {
        encrypted.push(String.fromCharCode((asciiCodeC - 97 + shift) % 26 + 97));
      }
    }
  }
  return encrypted.join('');
}

function decipher(str) {
  for (var i = 0; i < str.length; i++) {
    var asciiCodeD = str.charCodeAt(i);
    if (asciiCodeD >= 65 && asciiCodeD <= 90) {
      decrypted.push(String.fromCharCode((asciiCodeD - 65 - shift + 52) % 26 + 65));
    } else if (asciiCodeD >= 97 && asciiCodeD <= 122) {
      decrypted.push(String.fromCharCode((asciiCodeD - 97 - shift + 52) % 26 + 97));
    }
  }
  return decrypted.join('');
}

var encryptedText = cipher(text);
var decryptedText = decipher(encryptedText);

document.getElementById('msgCipher').innerHTML = 'Sua mensagem criptografada é: ' + encryptedText;
document.getElementById('msgDecipher').innerHTML = 'Sua mensagem descriptografada é: ' + decryptedText;
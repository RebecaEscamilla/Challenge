function MayusAcen(texto) {
  var band = false;
  for (var i = 0; i < texto.length; i++) {
    if ((texto.charCodeAt(i)) >= 65 && (texto.charCodeAt(i)) <= 90) {
      band = true;
    } else {
      if ((texto.charCodeAt(i)) >= 128 && (texto.charCodeAt(i)) <= 154) {
        band = true;
      } else {
        if ((texto.charCodeAt(i)) >= 160 && (texto.charCodeAt(i)) <= 163) {
          band = true;
        } else {
          if (((texto.charCodeAt(i)) == 130) || ((texto.charCodeAt(i)) == 181) || ((texto.charCodeAt(i)) == 144) || ((texto.charCodeAt(i)) == 214) || ((texto.charCodeAt(i)) == 224) || ((texto.charCodeAt(i)) == 233)) {
            band = true;
          }
        }
      }
    }
  }
  return band;

}

function encriptar() {
  var x = document.getElementById('TextoResultado');
  x.style.display = 'block';
  var texto = document.getElementById("box-texto").value;
  var encriptado = new Array();
  /*La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"*/
  if (MayusAcen(texto)) {
    alert("Solo letras minúsculas y sin acentos");
  } else {
    for (var i = 0; i < texto.length; i++) {
      if (texto[i] == "e") {
        encriptado[i] = "enter";
      } else if (texto[i] == "a") {
        encriptado[i] = "ai";
      } else if (texto[i] == "i") {
        encriptado[i] = "imes";
      } else if (texto[i] == "o") {
        encriptado[i] = "ober";
      } else if (texto[i] == "u") {
        encriptado[i] = "ufat";
      } else {
        encriptado[i] = texto[i];
      }
    }
  }
}

function desencriptar() {
  var x = document.getElementById('TextoResultado');
  x.style.display = 'block';
  var texto = document.getElementById("box-texto").value;
  var desen = new Array();
  if (MayusAcen(texto)) {
    alert("Solo letras minúsculas y sin acentos");
  } else {
    for (var i = 0; i < texto.length; i++) {
      if (texto[i] == "enter") {
        desen[i] = "e";
      } else if (texto[i] == "ai") {
        desen[i] = "a";
      } else if (texto[i] == "imes") {
        desen[i] = "i";
      } else if (texto[i] == "ober") {
        desen[i] = "o";
      } else if (texto[i] == "ufat") {
        desen[i] = "u";
      } else {
        desen[i] = texto[i];
      }
    }
  }
}

function limpiar() {
  document.getElementById("box-texto").value = "";
  var x = document.getElementById('TextoResultado');
  x.style.display = 'none';
}

function copiar() {

}
const textArea = document.querySelector(".box-texto");
const mensaje = document.querySelector(".mensaje");
const x = document.getElementById('cop');
const res = document.getElementById('resultado');

function btnEncriptar(){
  const textoEncriptado=encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  mensaje.style.backgroundImage="none";
  res.style.display = 'none';
  x.style.display = 'block';
}

function btnDesencriptar(){
  const textoDesencriptado=desencriptar(textArea.value);
  mensaje.value = textoDesencriptado;
  mensaje.style.backgroundImage="none";
  x.style.display = 'block';
  res.style.display = 'none';
}

function encriptar(stringEncriptado){
  
  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
  stringEncriptado = stringEncriptado.toLowerCase();

  for(let i=0;i<matrizCodigo.length;i++){
    if(stringEncriptado.includes(matrizCodigo[i][0])){
      stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringEncriptado;
}

function desencriptar(stringDesncriptado){
  
  let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
  stringDesncriptado = stringDesncriptado.toLowerCase();

  for(let i=0;i<matrizCodigo.length;i++){
    if(stringDesncriptado.includes(matrizCodigo[i][1])){
      stringDesncriptado = stringDesncriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return stringDesncriptado;
}

function limpiar() {
  textArea.value = "";
  mensaje.value="";
  mensaje.style="none"
  x.style.display = 'none';
  res.style.display = 'block';
}

function copiar() {
  let texto = document.getElementById('mensaje');
  texto.select();
  texto.setSelectionRange(0,99999);
  document.execCommand('copy');
  alert("Copiado exitosamente");
}
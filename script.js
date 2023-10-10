const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
  let dataAtual = new Date();

  let hr = dataAtual.getHours();
  let min = dataAtual.getMinutes();
  let seg = dataAtual.getSeconds();

  if (hr < 10) hr = "0" + hr;
  if (min < 10) min = "0" + min;
  if (seg < 10) seg = "0" + seg;

  horas.innerText = hr;
  minutos.innerText = min;
  segundos.innerText = seg;
});

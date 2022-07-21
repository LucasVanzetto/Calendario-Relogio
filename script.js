const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const diahtml = document.getElementById("dia");
const meshtml = document.getElementById("mes");

const relogio = setInterval(function time() {
  let data = new Date();
  let hora = data.getHours();
  let minuto = data.getMinutes();
  let segundo = data.getSeconds();
  let dia = data.getDate();
  let mes = data.getMonth() +1;

  if (hora < 10) hora = "0" + hora;
  if (minuto < 10) minuto = "0" + minuto;
  if (segundo < 10) segundo = "0" + segundo;

  horas.textContent = hora;
  minutos.textContent = minuto;
  segundos.textContent = segundo;
  diahtml.textContent = dia;
  meshtml.textContent = mes;
})
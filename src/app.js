import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let quien = ["Jesús", "El enemigo", "Tu angel de la guarda", "La intercesión"];
  let accion = ["te salvará,", "te enseñará", "lo permitirá", "te dirá que no"];
  let que = ["los secretos", "del pecado", "tus anhelos"];
  let cuando = ["en tu juicio final", "en el momento de tu muerte", "en medio de la tentación", "en la tribulación"];

  let excusa = quien[Math.floor(Math.random() * quien.length )] + " " + accion[Math.floor(Math.random()) * accion.length] + " " + que[Math.floor(Math.random() * que.length)] + " " + cuando[Math.floor(Math.random() * cuando.length)];

      document.getElementById("excuse").textContent = excusa;

};
  



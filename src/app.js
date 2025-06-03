import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let quien = ["Mi vecina", "El simio", "Tu alter ego", "Un perrito", "Un marciano"];
  let accion = ["te salvará,", "te comerá", "te peinará", "te dirá que no", "te lamerá"];
  let que = ["tu pelo", "la barriga", "los deseos", "en medio de la frente", "los zapatos"];
  let cuando = ["cuando estés volando", "rumbo al fin", "en medio del espacio exterior", "todos los días de tu vida", "en tu agonía"];



  const pickRandomElementOf = (list) => list[Math.floor(Math.random() * list.length)];

    let excusa = `${pickRandomElementOf(quien)} ${pickRandomElementOf(accion)} ${pickRandomElementOf(que)} ${pickRandomElementOf(cuando)}`;

    document.getElementById("excuse").textContent = excusa;
   

};
  



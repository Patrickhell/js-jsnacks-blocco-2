/**
 * // ? Dati un input e due bottoni, l'utente popola una lista di
 *  ingredienti usando il primo bottone, al termine della quale preme
 *  un secondo bottone e viene generata
 * un'immagine casuale di un pasto al centro dello schermo dopo 2 secondi 
 * per ogni ingrediente nella ricetta..
 */

const createButton = document.querySelector(".button-ingredient");
const ulElement = document.querySelector(".ingredientList");
const arrayList = [];
let counter = 0 ;
const buttonPlate = document.querySelector("button.plate");
createButton.addEventListener("click", function(){
  const inputElement = document.getElementById("add").value;
  arrayList.push(inputElement);
  ulElement.innerHTML += "<li>" + inputElement + "</li>";
  counter ++;
});


if ( counter >= 2 ){
  buttonPlate.addEventListener("click", function(){
  const creatElement = document.querySelectorAll(".img");
  creatElement.innerHTML = "<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzy99l8b3fmasxt79YIXjTmlEiu_6LuyGbVdHkK8AL7sX7Ez63VYGonxUn9fPrQjaCFwY&usqp=CAU" alt="lasagna";              
  
  
});

}



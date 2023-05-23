/**
 * 
 * Generare una lista usando una funzione:
 * nell'html ci dovrà essere esclusivamente un elemento ul parent,
 * attraverso una funzione creiamo un singolo elemento html di tipo li
 * poi ne aggiungiamo una decina all'ul, sempre via js.
 * 
 * BONUS:
 * Se clicchiamo sul li il suo testo verrà sbarrato.
 */

function createLiElement () {
 const ulElemnt = document.querySelector( "ul");
 const liElment = document.createElement ("li")
 liElment.innerHTML = "<p> element </p>"
 ulElemnt.appendChild (liElment);
 
}



for (let x = 0; x <= 10 ; x++) { 
    document.innerHTML =  createLiElement ();
}

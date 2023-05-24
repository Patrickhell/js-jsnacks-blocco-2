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
const ulElemnt = document.querySelector( "ul");

for (let x = 0; x < 10 ; x++) { 
    liElment = document.createElement ("li")
    liElment.innerHTML = "<p> element </p>"
    ulElemnt.appendChild (liElment);
    
    
}


   
   function createElement(tagName, className){
    const cellElement = document.createElement(tagName);
    cellElement.className = className;
    return cellElement;
}
console.log(createElement(tagName, className));

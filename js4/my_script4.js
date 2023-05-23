//Dare la possibilità di inserire due parole.
//Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
//Se hanno la stessa lunghezza, stamparle entrambe 
//altrimenti stampare la più lunga delle due.


let firstWord = prompt("inserisci una parole");
let secondWord = prompt("inserisci una parole");

if(isSameLong (firstWord, secondWord)){
  console.log(" the are same long;");
} else if ( firstWord.length > secondWord.length){
   console.log("the firstWord is more long");
} else {
   console.log("the secondWord is more long");
}


 function isSameLong(firstWord, secondWord) {
   if ( isSameLong){
      console.log(firstWord, secondWord);
   } else {
      console.log( firstWord);
   }
     
   }
console.log(longWord( firstWord, secondWord));


   

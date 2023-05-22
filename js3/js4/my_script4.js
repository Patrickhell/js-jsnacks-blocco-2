//Dare la possibilità di inserire due parole.
//Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
//Se hanno la stessa lunghezza, stamparle entrambe 
//altrimenti stampare la più lunga delle due.


let userWords = prompt("inserisci due parole");
isWordSame = true;
function lengthWords( word1, word2){
   if (isWordSame ){  
    return console.log(word1.length, word2.length);
    
    
   } else if( word1.length > word2.length){
    return console.log(word1.length);
   }
   
   }

//Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
//Continua a chiedere i numeri all'utente e a inserirli nell'array fino a 
//quando la somma degli elementi è
//minore di 50


const numberList = [];
let sum = 0 ;


while (sum < 50) {
    let insertNumber = parseInt(prompt("insert Number"));
    let pushNumber = numberList.push(sum += insertNumber);
    console.log(numberList);
          
    } 





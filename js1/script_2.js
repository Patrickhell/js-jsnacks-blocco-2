// Generare numero casuale tra 1 e 100 COMPRESI. 
//Continuare a chiedere all'utente di indovinare il numero 
//fino a quando non lo indovina.
//Ogni volta che sbaglia stampiamo in console un messaggio che gli/le dice
 //se il numero da indovinare è maggiore o minore.
//Una volta che ha indovinato, stampiamo in console il numero di tentativi totali.


let randomNumber = Math.floor(Math.random()*100 + 1);
console.log(randomNumber);
let guessNumber;
let attempt = 0;
while (guessNumber !== randomNumber) {
    guessNumber= parseInt( prompt("insert a number"));
    attempt++;
 if (guessNumber > randomNumber ) {
    console.log("the number to guess is higher than the one you entered");
} else if ( guessNumber < randomNumber ) {
    console.log("the number to guess is lower than the one you entered");
} else  {
    
   console.log( `AWSOME GOOD JOB YOU GUESSED AT THE ATTEMPT : "  ${attempt}  `)
}
}

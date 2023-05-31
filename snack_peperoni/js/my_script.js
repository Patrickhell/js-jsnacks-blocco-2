/**
 * Crea un array di 10 oggetti che rappresentano un peperone, indicando per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutti i peperoni.

Bonus:
crea un peperone con una funzione
 */


const peperone = [
    rosso = {
        varietà :"re",
        peso : 2,
        lunghezza:2
    },
    blu = {
        varietà :"pe",
        peso : 3,
        lunghezza:2
    },
   verde = {
        varietà :"pec",
        peso : 2,
        lunghezza:3
   },
    giallo = {
        varietà :"gi",
        peso : 2,
        lunghezza:5
    },
    rosso = {
        varietà :"ji",
        peso : 2,
        lunghezza:6
    },
    rosso = {
        varietà :"te",
        peso : 2,
        lunghezza:7
    },
    rosso = {
        varietà :"ok",
        peso : 2,
        lunghezza:3
    },
    rosso = {
        varietà :"ple",
        peso : 2,
        lunghezza:3
    },
    rosso = {
        varietà :"hm",
        peso : 2,
        lunghezza:1
    },
    rosso = {
        varietà :"go",
        peso : 2,
        lunghezza:"2"
    }
]
   let pesoTotale = 0;
    for(let i = 0 ; i < 10 ; i++){
        const pesoPeperone = peperone[i];
        pesoTotale += pesoPeperone.peso;
        console.log(pesoTotale);
 }

 function generatePeper (varietà, peso, lunghezza){
    const varietà = tipo;
    const peso = peso;
    lunghezza = lunghezza;
 }
  console.log(generatePeper(hm, 2, 1))

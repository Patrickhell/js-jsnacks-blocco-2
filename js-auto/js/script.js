/**

Crea un array composto da 15 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: 

nel primo array solo le auto a benzina,  // ciclo for 
nel secondo solo le auto a diesel,  // ciclo foreach
nel terzo il resto delle auto.  //array.filter

Infine stampa separatamente i 3 array.

 */

const auto = [
    {
        marca: "opel",
        modello: "astra",
        alimentazione:"diesel"

    },
    {
        marca:"audi",
        modello: "a3",
        alimentazione:"benzina"
    },
    {
        marca: "peugeot", 
        modello: "v4",
        alimentazione: "diesel"
    },
    {
        marca: "toyota",
        modello: "rav4",
        alimentazione:"metano"
    },
    {
        marca: "toyota",
        modello:"yaris",
        alimentazione: "gpl"
    },
    {
        marca: "range",
        modello: "r4",
        alimentazione: "diesel"
    },
    {
        marca: "renault",
        modello: "clio",
        alimentazione:"metano"
    },
    {
        marca: "renault",
        modello: "clio",
        alimentazione:"benzina"
    },
    {
        marca: "renault",
        modello:"megane",
        alimentazione:"benzina"
    },
    {
        marca: "opel",
        modello: "corsa",
        alimentazione: "benzina"
    },
    {
        marca: "audi",
        modello:" q3",
        alimentazione: "metano"
    },
    {
        marca: "bmw",
        modello: "x4",
        alimentazione: "benzina"
    },
    {
        marca: "bmw",
        modello: "q8",
        alimentazione:"gpl"
    },
    {
        marca:  "opel",
        modello: "antara",
        alimentazione: "diesel"
    },
    {
        marca: "audi",
        modello: "a4",
        alimentazione: "benzina"
    }
];
for (let i = 0 ; i < auto.length; i ++){
   let groupAuto1  = auto.filter (alimentazione =>benzina);
    console.log(groupAuto1);
}
function randomNumber(minNumber, maxNumber)
{ const myArray = [1, 2, 3];
    for (i = myArray.length-1; i > 1  ; i--)
    {
        let r = Math.floor(Math.random()*i);
        return r;
    }

    
}
console.log(randomNumber(1, 3));

const numToShow = document.getElementById("numbers");
const Play = document.getElementById("play-button");
const userInput = document.getElementById("input-nums");
let randomNums = [];


Play.addEventListener("click", 

    function(){
        
        randomNums = getRandomArray(1,10,5);
        numToShow.innerHTML = randomNums;
        setTimeout(
            function () {
                hideArray(numToShow, userInput);
            }, 5000  
        )
        setTimeout(
            function(){
                numsToWrite(5)
            }, 5000
        )

        Play.classList.add("hidden");
    }

)

function numsToWrite(maxTentativi = 5){

    let tentativi = 0;
    let risposta;
    let punteggio = 0;
    let risposteEsatte = [];

    do{
        risposta = parseInt(prompt("Inserisci i numeri che ricordi"));
        if(randomNums.includes(risposta)) {
            punteggio ++;
            risposteEsatte.push(risposta);
        }
        tentativi++;
    }while (tentativi < maxTentativi)

    console.log(`GAME OVER, IL TUO PUNTEGGIO E': ${punteggio} E HAI INDOVINATO I SEGUENTI NUMERI: ${risposteEsatte}`)
}


function hideArray(element, inputType){

    element.classList.add("hidden")
    // inputType.classList.remove("hidden")

}


// function playSimon(maxTentativi = 5){
    
//     let tentativiUser = 0;
//     let risposta;

//     numToShow.innerHTML = getRandomArray(1, 10, 5);
//     Play.classList.add("hidden");


// }


function getRandom(min, max){
    return Math.floor(Math.random() * (max- min +1)) +min;
}

function getRandomArray (minNum, maxNum, arrayLen){

    const genArray = [];
    while (genArray.length < arrayLen){

        let newNumber = getRandom(minNum, maxNum);

        if(!genArray.includes(newNumber)){
            genArray.push(newNumber);
        }
    }

    return genArray;
}
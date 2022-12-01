const gridElement = document.getElementById('grid');
const startElement = document.getElementById('play');
const mainElement = document.getElementById('main-element');

const bombList = [];


startElement.addEventListener('click', function(){
    gridElement.innerHTML = "";
    gridElement.classList.add('grid');
    for (let i = 1; i <= 100; i++){
        const newSquare = createSquare();
        newSquare.innerHTML = i;
        gridElement.appendChild(newSquare);
    }
})


//******************************************************************** */


//******************************************************************** */

function getRandomNumber(numMin, numMax){
    if(numMin===numMax){
        return numMax
    }
    return Math.floor(Math.random()*(numMax - numMin + 1) + numMin);
}

function createSquare (){
    const DivElement = document.createElement('div');
    DivElement.classList.add('square');
    DivElement.addEventListener('click', function(){
        DivElement.classList.toggle('bg-blue');
    })
    return DivElement;
}






const gridElement = document.getElementById('grid');
const startElement = document.getElementById('play');
const mainElement = document.getElementById('main-element');

startElement.addEventListener('click', function(){
    gridElement.innerHTML = "";
    gridElement.classList.add('grid');
    const bombList = [];
    let score = 0;
    let newSquare;
    for (let i = 1; i <= 100; i++){
        newSquare = createSquare();
        newSquare.innerHTML = i;
        gridElement.appendChild(newSquare);
        bombList.push(newSquare);
        newSquare.classList.add(`s-${i}`);
    }
    while (bombList.length>16){
        bombList.splice(Math.floor(Math.random()*100),1);
    }
    for (let i=0; i< bombList.length; i++){
        bombList[i].classList.add('bomb');
    }
    console.log(newSquare);
    console.log(bombList);
    for (let i=0; i<16; i++){

    }
})


//******************************************************************** */

//functions

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






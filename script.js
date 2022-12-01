const gridElement = document.getElementById('grid');
const startElement = document.getElementById('play');
const mainElement = document.getElementById('main-element');

startElement.addEventListener('click', function(){
    gridElement.innerHTML = "";
    gridElement.classList.add('grid');
    const gridElementList = [];
    const bombList = [];
    for (let i = 1; i <= 100; i++){
        const newSquare = createSquare();
        newSquare.innerHTML = i;
        gridElement.appendChild(newSquare);
        gridElementList.push(newSquare);
        bombList.push(newSquare);
        newSquare.classList.add(`s-${i}`);
        while (bombList.length>16){
            bombList.splice(Math.floor(Math.random()*bombList.length),1);
            newSquare.classList.add('bomb')
        }
    }
    console.log(gridElementList);
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






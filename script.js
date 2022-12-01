const gridElement = document.getElementById('grid');
const startElement = document.getElementById('play');
const mainElement = document.getElementById('main-element');

startElement.addEventListener('click', function(){
    gridElement.innerHTML = "";
    gridElement.classList.add('grid');
    const bombList = [];
    let score = 0;

    for (let i = 1; i <= 100; i++){

        while (bombList.length>15){
            bombList.splice(Math.floor(Math.random()*100),1);
        }

        let newSquare = createSquare();
        newSquare.innerHTML = i;

        
        newSquare.addEventListener('click', function(){
            newSquare.classList.toggle('bg-blue');
            console.log(bombList.includes(i));
        })

        gridElement.appendChild(newSquare);
        bombList.push(i);
        newSquare.classList.add(`s-${i}`);
    }
    


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
    return DivElement;
}






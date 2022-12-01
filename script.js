const gridElement = document.getElementById('grid');
const startElement = document.getElementById('play');
const mainElement = document.getElementById('main-element');
const scoreValue = document.getElementById('score-value');

startElement.addEventListener('click', function(){
    gridElement.innerHTML = "";
    gridElement.classList.add('grid');
    const bombList = [];
    let score = 0;
    scoreValue.innerHTML = score;

    for (let i = 1; i <= 100; i++){

        while (bombList.length>15){
            bombList.splice(Math.floor(Math.random()*bombList.length),1);
        }

        let newSquare = createSquare();
        newSquare.innerHTML = i;

        
        newSquare.addEventListener('click', function(){
            if (score>=(100 - (bombList.length + 1))){
                newSquare.classList.add('bg-blue');
                alert("Complimenti! Hai vinto!!!");
            }else if(bombList.includes(i)){
                alert("Che peccato hai presato una bomba!");
                gridElement.innerHTML = "";
                gridElement.classList.remove('grid');
                score = 0;
            } else if(!newSquare.classList.contains('bg-blue')){
                newSquare.classList.add('bg-blue');
                score +=1;
                scoreValue.innerHTML = score;
            }
            console.log(score);
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






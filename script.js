const gridElement = document.getElementById('grid');
const startElement = document.getElementById('play');
const mainElement = document.getElementById('main-element');


startElement.addEventListener('click', function(){
    gridElement.innerHTML = "";
    gridElement.classList.add('grid');
    for (let i = 1; i <= 100; i++){
        const newSquare = createSquare();
        newSquare.innerHTML = i;
        gridElement.appendChild(newSquare);
    }
})

function createSquare (){
    const DivElement = document.createElement('div');
    DivElement.classList.add('square');
    DivElement.addEventListener('click', function(){
        DivElement.classList.toggle('bg-blue');
    })
    return DivElement;
}






const grid = document.querySelector(".grid");
const clearButton = document.querySelector(".clear-grid");
const changeButton = document.querySelector(".change-grid");
let gridSize = 16;
let newGridSize;


function calculateSquareSize(size){
    const square = document.createElement("div");
    square.classList.toggle("square");
    square.style.width = `${grid.clientWidth/size}px`;
    square.style.height = `${grid.clientHeight/size}px`;
    grid.appendChild(square);
}

function createGrid(size){
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            calculateSquareSize(size);
        }
    }
}

function reset(){
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
      }
}

grid.addEventListener("mouseover", function(e) {
    if (e.target.matches('.square')){
        e.target.style["background-color"] = "#" + `${ Math.floor(Math.random() * 16777215).toString(16)}`;
    }
});

clearButton.addEventListener("click", () =>{
    reset();
    createGrid(gridSize);
});

changeButton.addEventListener("click", () =>{
    newGridSize = prompt("What size grid would you like? Max - 50", "16");
    if (newGridSize < 51){
        gridSize = newGridSize;
        reset();
        createGrid(gridSize);
    }
});

createGrid(gridSize);
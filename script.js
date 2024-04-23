const grid = document.querySelector(".grid");
const square = document.createElement("div");


function createGrid(size){
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            const square = document.createElement("div");
            square.classList.toggle("square");
            grid.appendChild(square);
        }
    }
}

createGrid(16);
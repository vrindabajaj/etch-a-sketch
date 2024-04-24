const grid = document.querySelector(".grid");

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

createGrid(16);
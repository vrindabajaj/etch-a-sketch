const container = document.querySelector(".sketch-container");
const square = document.createElement("div");


function createGrid(size){
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            const square = document.createElement("div");
            square.classList.toggle("square");
            container.appendChild(square);
        }
    }
}

createGrid(16);
const grid = document.querySelector(".grid");
const squares = document.querySelector(".square");

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

grid.addEventListener("mouseover", function(e) {
    if (e.target.matches('.square')){
        e.target.style["background-color"] = "peru";
    }
});

createGrid(16);
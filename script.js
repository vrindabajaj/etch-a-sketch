const grid = document.querySelector(".grid");
const clearButton = document.querySelector(".clear-grid");

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
        e.target.style["background-color"] = "#" + `${ Math.floor(Math.random() * 16777215).toString(16)}`;
    }
});

clearButton.addEventListener("click", () =>{
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
      }
    createGrid(16);
})

createGrid(16);
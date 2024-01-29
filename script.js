const board = document.getElementsByClassName("board")[0]

board.style.height = "384px"
board.style.width = "384px"


function createSquare(boxSize){
    const square = document.createElement("div")
    square.style.border = "0.5px solid black"
    square.style.width = `${boxSize}px`
    square.style.height = `${boxSize}px`
    square.addEventListener("mouseenter", ()=>{
        square.style.backgroundColor = randomColor() 
    })
    
    

    return square
}

function createRow(squares){
    const row = document.createElement("div")
    row.setAttribute("style", "display: flex")
    for(let i=0;i<squares; i++){     //loop to create a row 
        row.appendChild(createSquare(384/squares))
    }
    return row
}

function createGrid(squares){
    const grid = document.createElement("div")
    for(let i=0;i<squares; i++){     //loop to create a row 
        grid.appendChild(createRow(squares))
    }
    grid.setAttribute("style", "display: flex;  flex-direction: column;width:384px; height:384px ")

    return grid
}


function randomColor(){
    let a = Math.random() * 256
    let b = Math.random() * 256
    let c = Math.random() * 256

    return `rgb(${a} , ${b}, ${c})`
}

grid = createGrid(16)
board.appendChild(grid)

const btn = document.getElementById("btn")

btn.addEventListener("click", ()=>{
    let squares = window.prompt("Enter the number of squares, it should be less than 100")
    board.innerHTML = "";
    newGrid = createGrid(squares)
    board.appendChild(newGrid)
})
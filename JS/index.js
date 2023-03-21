const gameBoard =document.querySelector('#gameboard')
const infoDisplay = document.querySelector('#info')

const startCells = [
    "", "", "", "", "", "", "", "", ""
];

let go = "circle"
infoDisplay.textContent="Circle goes first"

function createBoard(){
    startCells.forEach((cell, index)=>{
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id=index
        cellElement.addEventListener('click', addGo )
        gameBoard.append(cellElement)
    })

}

createBoard()

function addGo(e){
    const goDisplay =document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go == "circle" ? "cross": "circle"
    infoDisplay.textContent = "It is now " + go + "'s go."
    e.target.removeEventListner("click", addGo)
    checkScore()
}

function checkScore(){
    const allSquare =  document.querySelectorAll('.square')
    const winningCombos = [
        [0,1,2],[3,4,5],[6,7,5],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8], [2 ,4,6]
    ]
}


const cells = document.querySelectorAll('.cell')
const text = document.querySelector('.text')
const reset = document.querySelector('.reset')

let token = 'X'
let turn = 0;

const disableBoard = () => {
    cells.forEach((cell) => {
        cell.replaceWith(cell.cloneNode(true));
    })
}

const declareWinner = () => {
    text.textContent = `${token} won! Play again?`
    disableBoard()
}

const declareDraw = () => {
    text.textContent = "It's a draw! Play again?"
}

const addToken = (cell) => {
    if (token === 'O') {
        token = 'X'
        cell.textContent = token 
    } else {
        token = 'O'
        cell.textContent = token 
    }
}

cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        if (cell.textContent === '') {
            text.textContent = `It's ${token}'s turn...`
            addToken(cell)
            checkForWinner() 
            turn++
            if (turn === 9) {
                declareDraw() 
                checkForWinner()
            }
        }
    })
})



reset.addEventListener('click', () => {
    window.location.reload();
})


const checkForWinner = () => {
    if (cells[0].textContent === token && cells[1].textContent === token && cells[2].textContent === token) {
        declareWinner(); 
    }
    if (cells[3].textContent === token && cells[4].textContent === token && cells[5].textContent === token) {
        declareWinner(); 
    }
    if (cells[6].textContent === token && cells[7].textContent === token && cells[8].textContent === token) {
        declareWinner(); 
    }
    if (cells[0].textContent === token && cells[3].textContent === token && cells[6].textContent === token) {
        declareWinner(); 
    }
    if (cells[1].textContent === token && cells[4].textContent === token && cells[7].textContent === token) {
        declareWinner(); 
    }
    if (cells[2].textContent === token && cells[5].textContent === token && cells[8].textContent === token) {
        declareWinner(); 
    }
    if (cells[0].textContent === token && cells[4].textContent === token && cells[8].textContent === token) {
        declareWinner(); 
    }
    if (cells[2].textContent === token && cells[4].textContent === token && cells[6].textContent === token) {
        declareWinner(); 
    }
     
}

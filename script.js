function Game(playerOne, playerTwo) {

}

function createBoard() {
    // Private Data
    const board = ['', '', '', '', '', '', '', '', ''];

    function checkBoard() {
        // This creates a copy of the current status of the board
        // If the slice method wouldn't be used, the boardStatus
        // would be a reference to the original board, which would
        // allow to modify it.
        // I wonder if using structuredCloned would be a more "professional" choice
        const boardStatus = board.slice();
        return boardStatus;
    }

    function makeMark(mark, cellIndex) {
        if (typeof mark === 'string' && board[cellIndex] === '') {
            board[cellIndex] = mark;
            return true;
        } else {          // I wonder if this else is recommended, or if it could be
            // better just write a return false at the end of the function...
            return false;
        }
    }

    // Public Interface
    return {
    }
}


// This is a FACTORY FUNCTION
function createPlayer(name, mark, score=0) {
    // Private Data

    // Public Interface
    return {
        name,
        mark,
        score
    };
}


function gameTest() {
    const playerOne = createPlayer('Juanes', 'X');
    const playerTwo = createPlayer('Wiktoria', 'O');
    const board = createBoard();
}

gameTest();
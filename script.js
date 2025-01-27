function createBoard() {

    const board = ['', '', '', '', '', '', '', '', ''];

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // columns
        [0, 4, 8], [2, 4, 6]              // diagonals
    ];

    function checkBoard() {
        const boardStatus = board.slice();
        return boardStatus;
    }

    function makeMark(mark, cellIndex) {
        if (typeof mark === 'string' && board[cellIndex] === '') {
            board[cellIndex] = mark;
            return true;
        }
        return false;
    }

    function checkWinner(mark) {
        return winningCombinations.some( combination => {
            combination.every( cell => board[cell] === mark)
        });
    }

    function isBoardPlayable(markLastPlayer) {
        if ( checkWinner(markLastPlayer) ) {
            return 'winner';
        } else if (!board.includes('')) {
            return 'tie';
        }
        return true;
    }

    return {
        checkBoard,
        makeMark,
        isBoardPlayable
    }
}

function createPlayer(name, mark, score=0) {

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
    console.log(board.isBoardPlayable('X'))
}

gameTest();
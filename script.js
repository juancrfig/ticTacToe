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
            return combination.every( cell => {
                return board[cell] === mark;
            })
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

function createGame(playerOne, playerTwo) {

    const highestScores = [];
    const players = [playerOne, playerTwo];
    let currentPlayerIndex = 0;

    function getCurrentPlayer() {
        return players[currentPlayerIndex];
    }

    function changeTurn() {
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    }

    function updateScoreBoard(playerName, playerScore) {
        if (playerScore > highestScores[9]) {

        }
    }

    return {
        getCurrentPlayer,
        changeTurn,
        highestScores
    };
}

function mainLogic() {
    const playerOne = createPlayer('Juanes', 'X');
    const playerTwo = createPlayer('Wiktoria', 'O');

    const board = createBoard();
    const game = createGame(playerOne, playerTwo);

    let gameStatus;
    do {
        const currentPlayer = game.getCurrentPlayer();
        const randomCell = randomIndex();

        board.makeMark(currentPlayer.mark, randomCell);

        game.changeTurn();

        gameStatus = board.isBoardPlayable(currentPlayer.mark);
    } while (gameStatus === true);

    if (gameStatus === 'winner') {
        const winnerName = game.getCurrentPlayer().name;
        console.log(`The winner is ${winnerName}!`);
    } else if (gameStatus === 'tie') {
        console.log("The game is a tie!");
    } else {
        console.log("The game ended unexpectedly.");
    }
}

function randomIndex() {
    return Math.floor( Math.random() * 9);
}


mainLogic();
function Game(playerOne, playerTwo) {

}

function Gameboard(score) {
    this.score = score;
}


// This is a FACTORY FUNCTION
function createPlayer(name, score=0) {
    // Private Data

    // Public Interface (returned object)
    return {
        name,
        score
    };
}
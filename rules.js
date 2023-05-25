class Rules {
  constructor(moves) {
    this.moves = moves;
  }

  getSortedArray(firstPlayer) {
    let sortedMoves = [...this.moves];
    this.movesMiddleId = (sortedMoves.length - 1) / 2;

    while (firstPlayer !== sortedMoves[this.movesMiddleId]) {
      let element = sortedMoves.pop();
      sortedMoves.unshift(element);
    }

    this.sortedMoves = sortedMoves;
  }

  getWinner(second) {
    let secondId = this.sortedMoves.indexOf(second);

    if (this.movesMiddleId === secondId) {
      return "Draw";
    } else if (this.movesMiddleId < secondId) {
      return "Win";
    } else {
      return "Lose";
    }
  }

  printWinner(condition) {
    if (condition == "Draw") {
      console.log("It's a draw!");
    }

    if (condition == "Win") {
      console.log("Computer win!");
    }

    if (condition == "Lose") {
      console.log("You win!");
    }
  }
}

module.exports = Rules;

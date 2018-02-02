function Game(player1, player2) {
  this.players = [player1, player2];
  this.board = [null,null,null,null,null,null,null,null,null]
  this.current_player = this.players[0];
  this.player_won = false;
}

Game.prototype.selectSquare = function(num) {
  if((this.current_player === this.players[0]) && this.board[num] === null) {
    this.board[num] = 'X';
    this.winning_move();
    this.switchPlayer();
  } else if ((this.current_player === this.players[1]) && this.board[num] === null) {
    this.board[num] = 'O';
    this.winning_move();
    this.switchPlayer();
  } else {
    throw new Error("Square is already selected");
  }

}

Game.prototype.switchPlayer = function() {
  if(this.current_player === this.players[0]) {
    this.current_player = this.players[1];
  } else {
    this.current_player = this.players[0];
  }
};

Game.prototype.gameOver = function () {
  if (this.is_game_over()) {
    return 'GAME OVER. Thanks for playing!';
  }
};

Game.prototype.is_game_over = function() {
  for(var i = 0; i < game.board.length; i++) {
    if(this.board[i] == null) {
      return false;
    }
  }
  return true;
};

Game.prototype.winning_move = function() {
  var winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(var i = 0; i < winCombos.length; i++) {

    var a = winCombos[i][0];
    var b = winCombos[i][1];
    var c = winCombos[i][2];

    if(this.board[a] && this.board[a] == this.board[b] && this.board[b] == this.board[c]) {
      // return this.current_player + "wins";
      this.player_won = true;
      console.log(this.player_won);
    }
  }

}

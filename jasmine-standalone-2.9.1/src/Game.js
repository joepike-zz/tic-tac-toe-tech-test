function Game(player1, player2) {
  this.players = [player1, player2];
  this.board = ["-", "-", "-",
                "-", "-", "-",
                "-", "-", "-"]
  this.current_player = this.players[0];
  this.player_won = false;
}

Game.prototype.selectSquare = function(num) {
  if((this.current_player === this.players[0]) && this.board[num] === "-") {
    this.board[num] = 'X';
    this.winning_move();
    this.switchPlayer();
  } else if ((this.current_player === this.players[1]) && this.board[num] === "-") {
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
}

Game.prototype.winning_move = function() {
  if(this.board[0] === "X" &&
     this.board[1] === "X" &&
     this.board[2] === "X") {
       this.player_won = true;
     }
}

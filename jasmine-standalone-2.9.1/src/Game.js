function Game(player1, player2) {
  this.players = [player1, player2];
  this.board = ["-", "-", "-",
                "-", "-", "-",
                "-", "-", "-"]
}

Game.prototype.selectSquare = function(num) {
  var select = 'X';
  this.board[num] = select;
}

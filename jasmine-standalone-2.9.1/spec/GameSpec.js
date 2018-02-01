describe("Game", function() {
  var player1;
  var player2;
  var game;

  beforeEach(function() {
    player1 = new Player("Charles");
    player2 = new Player("Cal");
    game = new Game(player1, player2);
  })

  describe("Game creation", function() {
    it("should start with two players", function() {
      expect(game.players[0].name).toEqual("Charles");
      expect(game.players[1].name).toEqual("Cal");
    })
    it("should start the game with an empty board", function() {
      expect(game.board).toEqual(["-", "-", "-", "-", "-", "-", "-", "-", "-"])
    })
  })

  describe("Gameplay", function() {
    it("should know it is player 1 turn at the start of the game", function() {
      expect(game.current_player.name).toEqual("Charles");
    })
    it("should allow the player to select a square", function() {
      game.selectSquare(1);
      expect(game.board[1]).toEqual('X');
    })
    it("should allow the opponenet to select a sqaure", function() {
      game.selectSquare(1);
      game.selectSquare(2);
      expect(game.board[2]).toEqual('O');
    })
    it("should not allow a player two turns in a row", function() {
      game.selectSquare(1);
      game.selectSquare(2);
      expect(game.board[2]).toEqual('O');
    })
    it("should not allow the player to select an already occupied square", function() {
      game.selectSquare(1);
      expect(function() { game.selectSquare(1) }).toThrow(new Error("Square is already selected"));
    })
    it("should know it is player 2 turn after player 1's turn", function() {
      game.selectSquare(1);
      expect(game.current_player.name).toEqual("Cal");
    })
    it("should know it is player 2 turn after swiching player", function() {
      game.switchPlayer();
      expect(game.current_player.name).toEqual("Cal");
    })
    it("should know it is player 1 turn after swiching back from player 2", function() {
      game.selectSquare(1);
      game.selectSquare(2);
      expect(game.current_player.name).toEqual("Charles");
    })
    it("should know whos turn it is", function() {
      expect(game.current_player.name).toEqual("Charles");
    })
  })

  describe("Win game", function() {
    it("should notify the current player that they have won", function() {
      game.selectSquare(0);
      game.selectSquare(3);
      game.selectSquare(1);
      game.selectSquare(4);
      game.selectSquare(2);
      console.log(game.board);
      expect(game.player_won).toEqual(true);
    })
  })

  // describe("End game", function() {
  //   it("should end the game when all squares are filled", function() {
  //
  //   })
  // })
})

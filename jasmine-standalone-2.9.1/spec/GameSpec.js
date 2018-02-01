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
    it("should allow the player to select a square", function() {
      game.selectSquare(1);
      expect(game.board[1]).toEqual('X');
    })
    it("should allow the opponenet to select a square", function() {
      game.selectSquare(1);
      game.selectSquare(2);
      expect(game.board[2]).toEqual('O');
    })
  })
})

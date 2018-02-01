describe("Player", function() {
  var player;
    it("should have a name", function() {
      player = new Player("Joe");
      expect(player.name).toEqual("Joe");
    })
  })

describe("fullName", function() {
  it("should be true", function() {
    expect(fullName('Tony', 'Phillips')).toEqual('Tony Phillips');
    // expect(player.currentlyPlayingSong).toEqual(song);

  });

  it('should capatalize both names correctly', function () {
  	expect(fullName("jp", 'whitaker')).toEqual('Jp Whitaker');
  });

});
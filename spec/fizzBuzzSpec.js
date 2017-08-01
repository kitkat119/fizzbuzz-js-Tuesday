describe('Fizzbuzz', function() {
  var fizzbuzz;
  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
  });
  describe('knows when a number is not', function() {
    it('divisible by 3', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });
  });
});

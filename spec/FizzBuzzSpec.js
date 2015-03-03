describe('FizzBuzz', function() {

  describe('It knows when a number is divisible', function(){

    it('by three', function(){
      fizzbuzz = new FizzBuzz()
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

  });

  describe('It knows when a number is not divisible', function(){

    it('by three', function(){
      fizzbuzz = new FizzBuzz()
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false); 
    });

  });

});
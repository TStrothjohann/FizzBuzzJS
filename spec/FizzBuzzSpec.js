describe('FizzBuzz', function() {
        fizzbuzz = new FizzBuzz()


  describe('It knows when a number is divisible', function(){

    it('by three', function(){
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('by five', function(){
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

  });

  describe('It knows when a number is not divisible', function(){

    it('by three', function(){
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false); 
    });

    it('by five', function(){
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
    });

  });

});
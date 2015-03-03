describe('FizzBuzz', function() {
        fizzbuzz = new FizzBuzz()


  describe('It knows when a number is divisible', function(){

    it('by three', function(){
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('by five', function(){
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('by fifteen', function(){
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });

  });

  describe('It knows when a number is not divisible', function(){

    it('by three', function(){
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false); 
    });

    it('by five', function(){
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
    });

    it('by fifteen', function(){
      expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false);
    });

  });


  describe('it should return keyword if divisible', function(){
    it('by three', function(){
      expect(fizzbuzz.gameResponse(3)).toEqual("fizz");
    });

    it('by five', function(){
      expect(fizzbuzz.gameResponse(5)).toEqual("buzz");
    });

    it('by fifteen', function(){
      expect(fizzbuzz.gameResponse(15)).toEqual("fizzbuzz");
    });
  });

  describe('it should return the number when not divisible by three or five', function(){
    it('not by 3 or 5', function(){
      expect(fizzbuzz.gameResponse(13)).toEqual(13);
    });
  });

});
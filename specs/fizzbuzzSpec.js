describe("fizzbuzz", function(){
    it("Should show FizzBuzz if divisible by 3 & 5", function(){
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    });
    it("Should show Fizz if divisible by 3", function(){
        expect(fizzBuzz(6)).toBe("Fizz");
    });
    it("Should show Buzz if divisible by 5", function(){
        expect(fizzBuzz(25)).toBe("Buzz");
    });
    it("Should show a number if not divisible by 3 or 5 but is a number", function(){
        expect(fizzBuzz(7)).toBe(7);
    });
    it("Should show 'That's not a number' if not a number type", function(){
        expect(fizzBuzz("twelve")).toBe("That's not a number");
    });
});
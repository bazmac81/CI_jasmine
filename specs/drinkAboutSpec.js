describe("whatCanIDrink", function(){
    it("Should return 'Drink Toddy' if age is less than 14", function(){
        expect(whatCanIDrink(12)).toBe("Drink Toddy");
    });
    it("Should return 'Drink Coke' if age is less then 18", function(){
        expect(whatCanIDrink(16)).toBe("Drink Coke");
    });
    it("Should return 'Drink Beer' if age is less then 21", function(){
        expect(whatCanIDrink(19)).toBe("Drink Beer");
    });
    it("Should return 'Drink Whisky' if age is less then 130", function(){
        expect(whatCanIDrink(59)).toBe("Drink Whisky");
    });
    it("Should return error message if less than 0",function(){
        expect(whatCanIDrink(-12)).toBe("Sorry. I can't tell what drink because that age is incorrect!");
    });
    it("Should return error message if age is not a number", function(){
        expect(whatCanIDrink("I'm old enough")).toBe("Sorry. I can't tell what drink because that age is incorrect!");
    });
});
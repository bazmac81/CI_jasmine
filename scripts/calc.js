Calculator = function(){
    this.value = 0;
}

Calculator.prototype.add = function(number) {
    if(typeof(number) === "number"){
        return this.value += number;
    }
    else {
        alert("Error!");
    }
}
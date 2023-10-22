function Accumulator(startingValue) {
    this.value = startingValue; 
  
    this.read = function() {
      let userInput = parseFloat(prompt("Введите число:")); 
      if (!isNaN(userInput)) { 
        this.value += userInput; 
      } else {
        alert("Введено некорректное число. Значение не изменилось.");
      }
    };
  }
  
  let accumulator = new Accumulator(1); 
  
  accumulator.read(); 
  accumulator.read(); 
  
  alert(accumulator.value); 
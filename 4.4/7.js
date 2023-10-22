let calculator = {
    // Метод для считывания двух значений и сохранения их как свойств объекта.
    read: function() {
      this.a = parseFloat(prompt("Введите первое значение:"));
      this.b = parseFloat(prompt("Введите второе значение:"));
    },
    // Метод для суммирования сохранённых значений и возврата результата.
    sum: function() {
      return this.a + this.b;
    },
    // Метод для умножения сохранённых значений и возврата результата.
    mul: function() {
      return this.a * this.b;
    }
  };
  
  calculator.read(); // Запрашиваем и сохраняем значения.
  alert(calculator.sum()); // Выводим сумму.
  alert(calculator.mul()); // Выводим произведение.
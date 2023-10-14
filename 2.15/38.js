//Вариант решения с использованием if
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  //Вариант решения с оператором ?
  function min(a, b) {
    return a < b ? a : b;
  }
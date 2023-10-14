let number;

while (true) {
  number = prompt("Введите число больше 100:", '');

  if (number === null) {
    break; // Пользователь нажал "Отмена"
  }
  number = Number(number);
  if (number > 100) {
    break; // Пользователь ввёл число больше 100
  }
}
if (number !== null) {
  alert("Вы ввели число больше 100!");
}
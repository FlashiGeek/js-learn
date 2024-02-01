function getLastDayOfMonth(year, month) {
  // устанавливаем дату на 1 число месяца следующего месяца
  let date = new Date(year, month + 1, 1);

  // устанавливаем дату на 0 число текущего месяца
  date.setDate(0);

  // возвращаем последнее число месяца
  return date.getDate();
}

alert(getLastDayOfMonth(2024, 1)); //29
alert(getLastDayOfMonth(2024, 2)); //31
alert(getLastDayOfMonth(2023, 2)); //31

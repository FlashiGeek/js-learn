function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}

let date = new Date(2024, 1, 2); // 2 февраля 2024 года
alert(getWeekDay(date)); // ПТ
function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

let date = new Date(2024, 1, 2);

alert(getDateAgo(date, 1)); //1 февраля 2024 года
alert(getDateAgo(date, 2)); // 31 января 2024 года
alert(getDateAgo(date, 365)) //2 февраля 2023 года
function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let seconds = Math.floor((tomorrow - now) / 1000);
  return seconds;
}

alert(getSecondsToTomorrow()); // Выводит количество секунд до завтрашней даты.
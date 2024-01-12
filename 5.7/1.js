function unique(arr) {
  let uniqueValues = [...new Set(arr)];
  return uniqueValues;
}

// тестовые данные
let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // ["Hare", "Krishna", ":-O"]

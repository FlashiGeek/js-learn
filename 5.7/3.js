//Метод map.keys() возвращает объект-итератор, а не массив. Поэтому вы не можете применить метод push() непосредственно к нему.
//можно преобразовать итераторв массив, затем применить метод push() к этому массив
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");
alert(keys); // name, more

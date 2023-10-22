let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // да, в такой записи или через прототип
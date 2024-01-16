let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let readMap = new WeakMap();
  
    readMap.set(messages[0], new Date(2017, 1, 1));
// WeakMap {{…} => Wed Feb 01 2017 00:00:00 GMT+0300 (Москва, стандартное время)}
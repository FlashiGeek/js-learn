let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let readMap = new WeakMap();
  
    readMap.set(messages[0], new Date(2023, 2, 1));
    // WeakMap {{…} => Wed Mar 01 2023 00:00:00 GMT+0300 (Москва, стандартное время)}
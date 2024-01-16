let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let readMessages = new WeakSet();
  
  // Применяем WeakSet для отслеживания прочитанных сообщений
  readMessages.add(messages[0]);
  readMessages.add(messages[1]);
  
  // Проверяем, было ли первое сообщение прочитано
  alert("Was message 1 read:", readMessages.has(messages[0])); // true
  
  // Удаляем первое сообщение из массива messages
  messages.shift();
  
  // Проверяем, было ли первое сообщение прочитано
  alert("Was message 1 read:", readMessages.has(messages[0])); // false
  
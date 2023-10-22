function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // undefined,связано с тем, что ключевое слово this в данном контексте не относится к возвращаемому объекту
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this; // Возвращает this, чтобы можно было вызывать методы по цепочке
    },
    down() {
      this.step--;
      return this; // Возвращает this, чтобы можно было вызывать методы по цепочке
    },
    showStep() {
      alert(this.step);
      return this; // Возвращает this, чтобы можно было вызывать методы по цепочке
    }
  };
  
  ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
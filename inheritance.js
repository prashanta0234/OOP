class Comouter {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }
  getName() {
    console.log(`Our Pc name is ${this.name} `);
  }
}

class Build extends Comouter {
  constructor(name, model, price) {
    super(name, model);
    this.price = price;
  }
}

const hp = new Build("Hp", "mk20", 20000);
const dell = new Build("Dell", "dl256", 25000);
console.log(hp);
console.log(dell);
hp.getName();
dell.getName();

// create a class where we add 2 number and create another class where we include add function and also we multifly two numbers

class Add {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add() {
    // const value=;
    console.log(`Added number is ${this.num1 + this.num2}`);
  }
}

class Multifly extends Add {
  constructor(num1, num2) {
    super(num1, num2);
  }

  multi() {
    console.log(`Multi ans is ${this.num1 * this.num2}`);
  }
}

const value = new Multifly(5, 10);
value.add();
value.multi();

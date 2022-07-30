class Computer {
  #price;
  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.#price = price;
  }
  aboutPc() {
    console.log(
      `Our laptop model number is${this.model} and name is ${
        this.name
      } and price  ${this.#price}`
    );
    this.#getPrice();
  }
  #getPrice() {
    console.log(`price is ${this.#price}`);
  }
}
const dell = new Computer("dell", "mkdir", 5000);
console.log(dell.model);
console.log(dell.price);
dell.aboutPc();
// dell.#getPrice();

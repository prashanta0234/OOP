class Computer {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }
  aboutPc() {
    console.log(`Our laptop model number is${this.model} and name is${name}`);
  }
}
const dell = new Computer("dell", "mkdir");
console.log(dell);
dell.aboutPc();

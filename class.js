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

// class HouseRent {
//   constructor(rent) {
//     this.rent = rent;
//   }
//   incriment() {
//     this.rent += 1000;
//     console.log(`incriment ${this.rent}`);
//   }
//   dicriment() {
//     this.rent -= 1000;
//     console.log(`Dicriment ${this.rent}`);
//   }
// }

// const myRent = new HouseRent(12000);
// console.log(myRent);
// myRent.incriment();
// myRent.incriment();
// myRent.dicriment();

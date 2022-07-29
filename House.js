const HouseRent = function (Rent) {
  this.Rent = Rent;
};

HouseRent.prototype.yearlyIncriment = function () {
  this.Rent += 1000;
  console.log(`incriment ${this.Rent}`);
};
HouseRent.prototype.yearlydicrimet = function () {
  this.Rent -= 1000;
  console.log(`yearly dicriment ${this.Rent}`);
};
const set = new HouseRent(2000);
console.log(set);

set.yearlyIncriment();

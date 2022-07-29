const Computer = function (name, model, ram, storage, storage_type) {
  this.Name = name;
  this.Model = model;
  this.Ram = ram;
  this.Storage = storage;
  this.Storage_type = storage_type;

  // this.aboutPc = () => {
  //   console.log(`Our laptop model number is${model} and name is${name}`);
  // };
};

Computer.prototype.aboutpc = function () {
  console.log(`Our laptop model number is${model} and name is${name}`);
};

const dell = new Computer("Dell", "Dkmk", "4GB", "128GB", "SSD");

console.log(dell);

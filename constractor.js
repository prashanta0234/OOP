// function constructor

const Computer = function (name, model, ram, storage, storage_type) {
  this.Name = name;
  this.Model = model;
  this.Ram = ram;
  this.Storage = storage;
  this.Storage_type = storage_type;
};

const dell = new Computer("DEll", "m256", "4gb", "250gb", "SSD");
const hp = new Computer("HP", "hp666", "8gb", "1TB", "HDD");
console.log(dell, hp);
console.log(`Our dell laptop model number is${dell.Model}`);

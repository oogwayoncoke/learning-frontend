class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }
}

const car1 = new Car("toyota", "supra", "1989", "silver");
const car2 = new Car("audi", "r8", "2022", "matte black");
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

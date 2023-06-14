'use strict';

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  break() {
    this.speed -= 5;
    console.log(this.speed);
  }
}

const bmw = new CarCl('BMW', 120);
const marcedes = new CarCl('Marcedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.break();
bmw.break();
bmw.break();
console.log();

marcedes.accelerate();
marcedes.accelerate();
marcedes.accelerate();
marcedes.break();
marcedes.break();
marcedes.break();
console.log();

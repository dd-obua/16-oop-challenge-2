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

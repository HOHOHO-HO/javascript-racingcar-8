export class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    this.position += 1;
  }

  printPositon() {
    return "-".repeat(this.position);
  }

  getName() {
    return this.name;
  }
}

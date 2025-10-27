import { Car } from "../domain/Car";
import { RandomNumber, getWinners } from "../utils/utils";
import {
  printGameStartMessage,
  printRoundResult,
  printWinners,
} from "../io/output";

class RacingGame {
  constructor(carNames, tryCount) {
    this.cars = carNames.map((name) => new Car(name));
    this.tryCount = tryCount;
  }

  async play() {
    printGameStartMessage();
    for (let i = 0; i < this.tryCount; i++) {
      this.moveCars();
      printRoundResult(this.cars);
    }
    const winners = getWinners(this.cars);
    printWinners(winners);
  }

  moveCars() {
    this.cars.forEach((car) => {
      if (RandomNumber() >= 4) {
        car.move();
      }
    });
  }
}

export default RacingGame;

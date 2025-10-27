import { Random } from "@woowacourse/mission-utils";

export function RandomNumber() {
  return Random.pickNumberInRange(0, 9);
}

export function SplitCarNames(InputCarName) {
  return InputCarName.split(",").map((car) => car.trim());
}

export function getWinners(cars) {
  const maxPosition = Math.max(...cars.map((car) => car.position));
  return cars
    .filter((car) => car.position === maxPosition)
    .map((car) => car.getName());
}

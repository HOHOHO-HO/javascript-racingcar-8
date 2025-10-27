import { Console } from "@woowacourse/mission-utils";

export function printGameStartMessage() {
  Console.print("\n실행 결과");
}

export function printRoundResult(cars) {
  cars.forEach((car) => {
    Console.print(`${car.getName()} : ${car.printPositon()}`);
  });
  Console.print("");
}

export function printWinners(winners) {
  Console.print(`최종 우승자 : ${winners.join(", ")}`);
}

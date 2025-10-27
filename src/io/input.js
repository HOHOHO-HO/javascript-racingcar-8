import { Console } from "@woowacourse/mission-utils";
import { SplitCarNames } from "../utils/utils";

export async function InputCarName() {
  const input = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  const carNames = SplitCarNames(input);

  carNames.forEach((name) => {
    if (name.length === 0 || name.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.");
    }
  });

  return carNames;
}

export async function InputTryCount() {
  const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  const tryCount = Number(input);

  if (Number.isNaN(tryCount) || tryCount <= 0) {
    throw new Error("[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.");
  }

  return tryCount;
}

import { InputCarName, InputTryCount } from "./io/input";
import RacingGame from "./game/RacingGame";

class App {
  async run() {
    const carNames = await InputCarName();
    const rounds = await InputTryCount();

    const game = new RacingGame(carNames, rounds);
    await game.play();
  }
}

export default App;

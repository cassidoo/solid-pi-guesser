import { createSignal } from "solid-js";

import styles from "./App.module.css";
import Pi from "./Pi.jsx";
import InputComponent from "./InputComponent";

function App() {
  const [numberOfLives, setNumberOfLives] = createSignal(3);
  const digitsGuessed = createSignal(0);

  let tweetString = `I just guessed ${digitsGuessed[0]()} digits of pi!`;
  const website = `https://github.com/cassidoo/solid-pi-guesser`;

  return (
    <div class={styles.App}>
      {numberOfLives() > 0 && (
        <>
          What's the next digit, champ?
          <InputComponent
            numLives={setNumberOfLives}
            numDigits={digitsGuessed}
          />
        </>
      )}
      <Pi digits={digitsGuessed[0]} />
      {numberOfLives() > 0 && <div>Number of lives: {numberOfLives()}</div>}
      {numberOfLives() === 0 && (
        <>
          <h2>You correctly guessed {digitsGuessed[0]()} digits of pi!</h2>
          <a
            href={`https://twitter.com/intent/tweet?text=${tweetString}&url=${website}&via=cassidoo`}
          >
            Tweet your score!
          </a>
        </>
      )}
    </div>
  );
}

export default App;

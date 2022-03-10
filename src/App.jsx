import { createSignal, createEffect } from "solid-js";

import styles from "./App.module.css";
import Pi from "./Pi.jsx";
import InputComponent from "./InputComponent";

function App() {
  const [numberOfLives, setNumberOfLives] = createSignal(3);
  const digitsGuessed = createSignal(0);

  let tweetString = `Let's gooo`;
  const website = `https://pi-guesser.netlify.app/`;

  createEffect(() => {
    tweetString = `I just guessed ${digitsGuessed[0]()} digits of pi!`;
  });

  return (
    <div class={styles.App}>
      <h1>Guess digits of pi!</h1>
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
            target="_blank"
          >
            Tweet your score!
          </a>
        </>
      )}
      <div class={styles.footer}>
        This project was lovingly built live{" "}
        <a href="https://twitch.tv/cassidoo">on Twitch</a> and can be found{" "}
        <a href="https://github.com/cassidoo/solid-pi-guesser">on GitHub</a>
      </div>
    </div>
  );
}

export default App;

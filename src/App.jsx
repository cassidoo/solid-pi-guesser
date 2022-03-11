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
    <>
      <div class={styles.App}>
        <h1>Guess digits of pi.</h1>
        {numberOfLives() > 0 && (
          <>
            <div class={styles.lives}>Number of lives: {numberOfLives()}</div>
            <InputComponent
              numLives={setNumberOfLives}
              numDigits={digitsGuessed}
            />
            <Pi digits={digitsGuessed[0]} />
          </>
        )}
        {numberOfLives() === 0 && (
          <>
            <h2>You correctly guessed {digitsGuessed[0]()} digits of pi!</h2>
            <a
              href={`https://twitter.com/intent/tweet?text=${tweetString}&url=${website}&via=cassidoo`}
              target="_blank"
            >
              Tweet your score!
            </a>
            <button
              onClick={() => {
                window.location.reload();
              }}
            >
              Try again?
            </button>
          </>
        )}
      </div>
      <div class={styles.footer}>
        This project was lovingly built live{" "}
        <a href="https://twitch.tv/cassidoo">on Twitch</a> and can be found{" "}
        <a href="https://github.com/cassidoo/solid-pi-guesser">on GitHub</a>
      </div>
    </>
  );
}

export default App;

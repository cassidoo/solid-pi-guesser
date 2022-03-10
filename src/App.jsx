import { createSignal } from "solid-js";

import styles from "./App.module.css";
import Pi from "./Pi.jsx";
import InputComponent from "./InputComponent";

function App() {
  const [numberOfLives, setNumberOfLives] = createSignal(3);
  const digitsGuessed = createSignal(0);

  return (
    <div class={styles.App}>
      What's the next digit, champ?
      <InputComponent numLives={setNumberOfLives} numDigits={digitsGuessed} />
      <Pi digits={digitsGuessed[0]} />
      <div>Number of lives: {numberOfLives()}</div>
    </div>
  );
}

export default App;

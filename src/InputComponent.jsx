import { createSignal } from "solid-js";
import Pi from "./Pi.jsx";
import { checkDigits } from "./pihelpers.js";
import styles from "./InputComponent.module.css";

export default function InputComponent(props) {
  let numLives = props.numLives;
  let [numberOfDigitsGuessed, setNumberOfDigitsGuessed] = props.numDigits;

  const [currentGuess, setCurrentGuess] = createSignal("");
  const [message, setMessage] = createSignal("");

  return (
    <div class={styles.guess}>
      {/* You need to pass the signal but not call it here,
          call it in the component that needs to re-render */}
      <div>You've guessed {numberOfDigitsGuessed()} digits so far!</div>
      <input
        class={styles.input}
        type="text"
        placeholder="Next digit!"
        value={currentGuess()}
        onInput={(e) => {
          setCurrentGuess(e.target.value);
          if (checkDigits(currentGuess(), numberOfDigitsGuessed())) {
            setMessage("");
            setNumberOfDigitsGuessed(numberOfDigitsGuessed() + 1);
            setCurrentGuess("");
            if (numberOfDigitsGuessed() % 5 === 0) {
              numLives((prev) => prev + 1);
            }
          } else {
            setMessage("You are a failure 🥰");
            console.log(e);
            if (e.inputType !== "deleteContentBackward") {
              numLives((prev) => prev - 1);
            }
          }
        }}
      />
      {message.length > 0 && (
        <marquee class={styles.message}>{message}</marquee>
      )}
    </div>
  );
}

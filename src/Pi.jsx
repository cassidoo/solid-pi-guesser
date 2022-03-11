import styles from "./Pi.module.css";
import { digitsOfPi } from "./pihelpers.js";

export default function Pi(props) {
  return (
    <h2
      class={`${styles.pi} ${props.digits() > 35 ? styles.pi35 : null} ${
        props.digits() > 60 ? styles.pi60 : null
      }`}
    >
      3.{digitsOfPi.substring(0, props.digits())}
    </h2>
  );
}

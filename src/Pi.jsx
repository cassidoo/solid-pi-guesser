import styles from "./Pi.module.css";
import { digitsOfPi } from "./pihelpers.js";

export default function Pi(props) {
  return <h2 class={styles.pi}>3.{digitsOfPi.substring(0, props.digits())}</h2>;
}

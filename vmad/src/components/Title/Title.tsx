import styles from "./Title.module.scss";
import ScrambleHover from "../../components/ui/scramble-hover";

export default function Title() {
  return (
    <>
      <ScrambleHover text={"Victoria Li"} className={styles.title} />
      <ScrambleHover text={"Currently: Seattle"} className={styles.subtitle} />
    </>
  );
}

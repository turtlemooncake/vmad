import clsx from "clsx";
import Title from "../../components/Title/Title";
import ScrambleHover from "../../components/ui/scramble-hover";
import styles from "./Resume.module.scss";

export default function Resume() {
  return (
    <div className={styles.container}>
      <Title />
      <hr className={styles.divider}></hr>
      <ScrambleHover
        text={"Experience"}
        className={clsx(styles.experience, styles.title)}
      />
    </div>
  );
}

Resume.Body = () => {
  return <div></div>;
};

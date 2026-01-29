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
      <Resume.Body />
    </div>
  );
}

Resume.Body = () => {
  return (
    <div className={styles.body}>
      <Resume.ExpTitle />
      {/* <ScrambleHover
        text={"Scopely (Niantic)"}
        className={clsx(styles.experience, styles.title)}
      />
      <h3>Software Engineer</h3>
      <ul>
        <li>Webfusion</li>
        <li>Trust & Safety</li>
      </ul>
      <ScrambleHover
        text={"NW Mutual"}
        className={clsx(styles.experience, styles.title)}
      />
      <h3>Software Engineer</h3> */}
    </div>
  );
};

Resume.ExpTitle = () => {
  return (
    <div className={clsx(styles.experience, styles.title, styles.box)}>
      <ScrambleHover
        text={"Scopely (Niantic)"}
        className={clsx(styles.experience, styles.title)}
      />
      <span className={styles.date}>Sep 2023 - Present</span>
    </div>
  );
};

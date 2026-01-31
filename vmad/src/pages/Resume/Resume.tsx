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
  const data = ["hi there this is my blurb"];
  return (
    <div className={styles.body}>
      <Resume.ExpTitle
        title={"Scopely (Niantic)"}
        date={"Sep 2023 - Present"}
      />
      <Resume.ExpBody data={data} />
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

interface ExpTitleProps {
  title: string;
  date: string;
}

Resume.ExpTitle = ({ title, date }: ExpTitleProps) => {
  return (
    <div className={clsx(styles.experience, styles.title, styles.box)}>
      <ScrambleHover
        text={title}
        className={clsx(styles.experience, styles.title)}
      />
      <span className={styles.date}>{date}</span>
    </div>
  );
};

interface ExpBodyProps {
  data: string[];
}

Resume.ExpBody = ({ data }: ExpBodyProps) => {
  return (
    <div className={clsx(styles.experience, styles.body)}>
      <ul>
        {data.map((description) => {
          return <li>{description}</li>;
        })}
      </ul>
    </div>
  );
};

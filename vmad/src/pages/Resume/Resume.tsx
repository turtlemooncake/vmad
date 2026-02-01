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
  const nianticJob = [
    "Working on web features related to the Pikmin Bloom and Monster Hunter Now game websites and webstores.",
    "Own and maintain the GPDR process for Pokémon GO, PB, and MHN, which is responsible for player data access and data deletion.",
  ];
  const nianticIntern = [
    "Created backend logic to resize uploaded player images",
  ];
  return (
    <div className={styles.body}>
      <Resume.ExpTitle
        title={"Scopely (Niantic)"}
        date={""}
        useScramble={true}
      />
      <Resume.ExpTitle
        title={"SWE"}
        date={"Sep 2023 - Present"}
        useScramble={false}
      />
      <Resume.ExpBody data={nianticJob} />
      <Resume.ExpTitle
        title={"SWE Intern"}
        date={"May 2022 - Aug 2022"}
        useScramble={false}
      />
      <Resume.ExpBody data={nianticIntern} />
    </div>
  );
};

interface ExpTitleProps {
  title: string;
  date: string;
  useScramble: boolean;
}

Resume.ExpTitle = ({ title, date, useScramble }: ExpTitleProps) => {
  return (
    <div className={clsx(styles.experience, styles.title, styles.box)}>
      {useScramble && (
        <ScrambleHover
          text={title}
          className={clsx(styles.experience, styles.title)}
        />
      )}
      {!useScramble && <h4 className={styles.jobTitle}>{title}</h4>}
      {date && <span className={styles.date}>{date}</span>}
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

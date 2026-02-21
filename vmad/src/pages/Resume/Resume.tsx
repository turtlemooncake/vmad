import clsx from "clsx";
import Title from "../../components/Title/Title";
import ScrambleHover from "../../components/ui/scramble-hover";
import styles from "./Resume.module.scss";

export default function Resume() {
  return (
    <div className={styles.container}>
      <Title title={"Victoria Li"} subtitle={"Currently: Seattle"} />
      <hr className={styles.divider}></hr>
      <ScrambleHover
        text={"[Experience]"}
        className={clsx(styles.experience, styles.title)}
      />
      <Resume.Body />
      <div className="grid pt-6 gap-[15px]">
        <ScrambleHover
          text={"[Education]"}
          className={clsx(styles.experience, styles.title)}
        />
        <Resume.Education />
      </div>
    </div>
  );
}

Resume.Education = () => {
  const courses = [
    "Coursework: Web Dev, Undergrad ML, Digital Signal Processing, OS, Comp Arch, Cloud Computing, Algorithms, Databases, Probability, Classics, Art History, A whole lot of finance related stuff",
  ];
  return (
    <div>
      <div>
        <Resume.ExpTitle
          title={"University of Virginia"}
          date={""}
          useScramble={true}
        />
        <div>
          <Resume.ExpTitle
            title={"Computer Science, McIntire Commerce"}
            date={"Sep 2019 - May 2023"}
            useScramble={false}
          />
          <Resume.ExpBody data={courses} />
        </div>
      </div>
    </div>
  );
};

Resume.Body = () => {
  const nianticJob = [
    "Working on web features related to the Pikmin Bloom and Monster Hunter Now game websites and webstores.",
    "Own and maintain the GPDR process for Pokémon GO, PB, and MHN, which is responsible for player data access and data deletion.",
  ];
  const nianticIntern = [
    "Created backend endpoint to process and resize player images",
  ];

  const nwMutualIntern = [
    "Enhanced backend service's logging and metrics. Made graphs in Kibana.",
  ];

  const uvaVRCIntern = [
    "Digital Museum Project: cataloged and photoshopped impurities on historical records from the UVa Museum into Jstor Forum",
  ];

  return (
    <div className={styles.bodyContainer}>
      <div>
        <Resume.ExpTitle
          title={"Scopely (Niantic)"}
          date={""}
          useScramble={true}
        />
        <div className={styles.job}>
          <div>
            <Resume.ExpTitle
              title={"Software Engineer"}
              date={"Sep 2023 - Present"}
              useScramble={false}
            />
            <Resume.ExpBody data={nianticJob} />
          </div>

          <div>
            <Resume.ExpTitle
              title={"Intern"}
              date={"May 2022 - Aug 2022"}
              useScramble={false}
            />
            <Resume.ExpBody data={nianticIntern} />
          </div>
        </div>
      </div>

      <div>
        <Resume.ExpTitle title={"NW Mutual"} date={""} useScramble={true} />
        <div>
          <Resume.ExpTitle
            title={"Intern"}
            date={"June 2021 - May 2022"}
            useScramble={false}
          />
          <Resume.ExpBody data={nwMutualIntern} />
        </div>
      </div>

      <div>
        <Resume.ExpTitle
          title={"UVA Visual Resource Collection"}
          date={""}
          useScramble={true}
        />
        <div>
          <Resume.ExpTitle
            title={"Intern"}
            date={"Sep 2019 - May 2021"}
            useScramble={false}
          />
          <Resume.ExpBody data={uvaVRCIntern} />
        </div>
      </div>
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
        <mark>
          <ScrambleHover
            text={title}
            className={clsx(styles.experience, styles.title)}
          />
        </mark>
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
        {data.map((description, idx) => {
          return <li key={idx}>{description}</li>;
        })}
      </ul>
    </div>
  );
};

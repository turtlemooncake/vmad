import { Link } from "react-router-dom";
import ScrambleHover from "../../components/ui/scramble-hover";
import styles from "./Me.module.scss";

export default function Me() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <ScrambleHover
          text={"Victoria Li"}
          scrambleSpeed={50}
          maxIterations={8}
          sequential={true}
          revealDirection="start"
        />
      </h1>
      <p className={styles.subtitle}>
        <ScrambleHover
          text={"Currently: Seattle"}
          scrambleSpeed={50}
          maxIterations={8}
          sequential={true}
          revealDirection="start"
        />
      </p>
      <div className={styles.article}>
        <p>Hi, I'm Victoria.</p>
        <p>
          I spend a lot of time thinking about how things work under the hood.
          I'm a big fan of open-source projects and the ancillary community
          groups that maintain/support/hate-watch their respective stuff.
        </p>
        <p>
          Currently, I'm a software engineer at Scopely (Niantic). You may have
          played some of our <span className={styles.game}>games</span>.
        </p>
        <p>
          Feel free to take a tour of this site. If you would like to reach out,
          you can find me <Link to="mailto:vickitori109@gmail.com">here</Link>.
        </p>
      </div>
    </div>
  );
}

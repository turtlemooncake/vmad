import { Link } from "react-router-dom";
import ScrambleHover from "../ui/scramble-hover";
import styles from "./Footer.module.scss";

export default function Footer() {
  const links = [
    {
      name: "[linkedin]",
      url: "https://www.linkedin.com/in/victoria-li-70a31b1b2/",
    },
    {
      name: "[github]",
      url: "https://github.com/turtlemooncake",
    },
    {
      name: "[goodreads]",
      url: "https://www.goodreads.com/user/show/173575958-skytherin",
    },
  ];

  return (
    <div className={styles.container}>
      {links.map((link) => {
        return (
          <Link to={link.url} className={styles.link} target="_blank">
            <ScrambleHover
              text={link.name}
              scrambleSpeed={50}
              maxIterations={8}
              sequential={true}
              revealDirection="start"
            />
          </Link>
        );
      })}
    </div>
  );
}

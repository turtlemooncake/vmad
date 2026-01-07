import ScrambleHover from "../ui/scramble-hover";
import styles from "./Navbar.module.scss";

export default function NavBar() {
  const links = ["me", "cv", "posts", "books", "gallery"];

  return (
    <div className={styles.container}>
      {links.map((link) => {
        return (
          <a href={`/${link}`} className={styles.link}>
            [{link}]
          </a>
        );
      })}
      <ScrambleHover
        text={"hellotheredouble"}
        scrambleSpeed={70}
        maxIterations={6}
        sequential={true}
        revealDirection="start"
      />
    </div>
  );
}

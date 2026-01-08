import ScrambleHover from "../ui/scramble-hover";
import styles from "./Navbar.module.scss";

export default function NavBar() {
  const links = ["me", "cv", "posts", "books", "gallery"];

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        {links.map((link) => {
          return (
            <a href={`/${link}`} className={styles.link}>
              <ScrambleHover
                text={`[${link}]`}
                scrambleSpeed={50}
                maxIterations={8}
                sequential={true}
                revealDirection="start"
              />
            </a>
          );
        })}
      </div>
      <button className={styles.button}></button>
    </div>
  );
}

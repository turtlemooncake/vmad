import { Link } from "react-router-dom";
import ScrambleHover from "../ui/scramble-hover";
import styles from "./Navbar.module.scss";
import clsx from "clsx";
import { useState } from "react";

export default function NavBar() {
  const links = ["me", "resume", "posts", "books", "gallery"];

  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "light",
  );

  const switchMode = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        {links.map((link) => {
          return (
            <Link to={`/${link}`} className={styles.link}>
              <ScrambleHover
                text={`[${link}]`}
                scrambleSpeed={50}
                maxIterations={8}
                sequential={true}
                revealDirection="start"
              />
            </Link>
          );
        })}
      </div>
      <button
        className={clsx(styles.button, theme === "dark" && styles.darkMode)}
        onClick={switchMode}
      ></button>
    </div>
  );
}

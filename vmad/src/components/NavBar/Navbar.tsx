import { Link } from "react-router-dom";
import ScrambleHover from "../ui/scramble-hover";
import styles from "./Navbar.module.scss";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export default function NavBar() {
  const links = ["me", "resume", "posts", "books", "gallery"];

  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "light",
  );

  const [showMobileNav, setShowMobileNav] = useState(false);

  const switchMode = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const toggleMobileNav = () => {
    const newState = !showMobileNav;
    setShowMobileNav(newState);
    console.log(`hamburger state ${newState}`);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        {links.map((link, idx) => {
          return (
            <Link to={`/${link}`} className={styles.link} key={idx}>
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
      </nav>
      {<MobileMenu show={showMobileNav} />}
      <button
        className={clsx(
          styles.mobileNavbar,
          styles.btn,
          theme === "dark" && styles.darkMode,
        )}
        onClick={toggleMobileNav}
      ></button>
      <button
        className={clsx(styles.button, theme === "dark" && styles.darkMode)}
        onClick={switchMode}
      ></button>
    </div>
  );
}

type MobileMenuProps = {
  show: boolean;
};

function MobileMenu(props: MobileMenuProps) {
  const { show } = props;
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (show && !dialog.open) {
      dialog.showModal();
    }

    if (!show && dialog.open) {
      dialog.close();
    }
  }, [show]);

  if (!show) return null;

  return (
    <dialog ref={ref}>
      <button>hi there</button>
    </dialog>
  );
}

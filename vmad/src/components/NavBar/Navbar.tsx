import { Link, useLocation } from "react-router-dom";
import ScrambleHover from "../ui/scramble-hover";
import styles from "./Navbar.module.scss";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

const links = ["me", "resume", "posts", "books", "gallery"];

export default function NavBar() {
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
  };

  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        {links.map((link, idx) => {
          return (
            <Link
              to={`/${link}`}
              className={clsx(
                styles.link,
                link === currentPath && styles.current,
              )}
              key={idx}
            >
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
      <MobileMenu
        show={showMobileNav}
        theme={theme}
        setShow={() => setShowMobileNav(false)}
      />
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
  theme: string;
  setShow: () => void;
};

function MobileMenu(props: MobileMenuProps) {
  const { show, theme, setShow } = props;
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
      <button
        onClick={setShow}
        className={clsx(
          styles.mobileNavbar,
          styles.close,
          theme === "dark" && styles.darkMode,
        )}
      ></button>
      <div className={clsx(styles.mobileNavbar, styles.nav)}>
        {links.map((link, idx) => {
          return (
            <Link
              to={`/${link}`}
              className={styles.link}
              key={idx}
              onClick={setShow}
            >
              <ScrambleHover text={`[${link}]`} revealDirection="start" />
            </Link>
          );
        })}
      </div>
    </dialog>
  );
}

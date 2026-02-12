import { Link, useLocation } from "react-router-dom";
import ScrambleHover from "../ui/scramble-hover";
import styles from "./Navbar.module.scss";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

const links = ["me", "resume", "posts", "bookshelf"];

export default function NavBar() {
  // eslint-disable-next-line
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
  const pathname = location.pathname;
  let linkLocation = location.pathname.split("/")[1];
  if (linkLocation === "") {
    linkLocation = "me";
  }

  const showPostBackBtn = pathname.includes("posts/");

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        {showPostBackBtn && (
          <Link to={"/posts"} relative="path" className={styles.back}></Link>
        )}
        {links.map((link, idx) => {
          return (
            <Link
              to={`/${link}`}
              className={clsx(
                styles.link,
                link === linkLocation && styles.current,
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
        setShow={() => setShowMobileNav(false)}
        location={linkLocation}
      />
      <button
        className={clsx(styles.mobileNavbar, styles.btn)}
        onClick={toggleMobileNav}
      ></button>
      <button className={styles.button} onClick={switchMode}></button>
    </div>
  );
}

type MobileMenuProps = {
  show: boolean;
  setShow: () => void;
  location: string;
};

function MobileMenu(props: MobileMenuProps) {
  const { show, setShow } = props;
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
        className={clsx(styles.mobileNavbar, styles.close)}
      ></button>
      <div className={clsx(styles.mobileNavbar, styles.nav)}>
        {links.map((link, idx) => {
          return (
            <Link
              to={`/${link}`}
              className={clsx(
                styles.link,
                link === props.location && styles.current,
              )}
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

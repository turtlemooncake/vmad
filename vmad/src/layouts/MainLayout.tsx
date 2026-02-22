import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar/Navbar";
import styles from "./MainLayout.module.scss";
import Footer from "../components/Footer/Footer";
import clsx from "clsx";
import { useEffect } from "react";

export default function MainLayout() {
  const location = useLocation();
  const linkLocation = location.pathname.split("/")[1];
  const useBookshelfLayout = linkLocation === "bookshelf";

  useEffect(() => {
    // redirect pathing of direct entry of tabs to the appropriate tab
    // this is needed bc GitHub pages cannot serve deeplinks
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");

    if (redirect) {
      window.history.replaceState(null, "", redirect);
    }
  }, []);

  return (
    <div className={clsx(styles.layout)}>
      <div
        className={clsx(
          styles.container,
          useBookshelfLayout && styles.bookshelf,
        )}
      >
        <NavBar />
        <Outlet />
        <Footer
          className={clsx(useBookshelfLayout && styles.bookshelfFooter)}
        />
      </div>
    </div>
  );
}

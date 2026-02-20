import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar/Navbar";
import styles from "./MainLayout.module.scss";
import Footer from "../components/Footer/Footer";
import clsx from "clsx";

export default function MainLayout() {
  const location = useLocation();
  const linkLocation = location.pathname.split("/")[1];
  const useBookshelfLayout = linkLocation === "bookshelf";

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

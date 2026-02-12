import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/Navbar";
import styles from "./MainLayout.module.scss";
import Footer from "../components/Footer/Footer";
import clsx from "clsx";

export default function MainLayout() {
  return (
    <div className={clsx(styles.layout)}>
      <div className={clsx(styles.container)}>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

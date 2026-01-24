import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/Navbar";
import styles from "./MainLayout.module.scss";
import Footer from "../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

export default function MainLayout() {
  const location = useLocation();
  const currentPath = location.pathname;

  const concentratedLayouts = new Set(["/", "/me"]);
  const useConcentratedLayout = concentratedLayouts.has(currentPath);

  return (
    <div
      className={clsx(
        styles.layout,
        useConcentratedLayout && styles.concentrated,
      )}
    >
      <div
        className={clsx(
          styles.container,
          useConcentratedLayout && styles.concentrated,
        )}
      >
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

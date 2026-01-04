import NavBar from "../components/NavBar/Navbar";
import styles from "./MainLayout.module.scss";

export default function MainLayout() {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <NavBar />
      </div>
    </div>
  );
}

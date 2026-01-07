import styles from "./Navbar.module.scss";

export default function NavBar() {
  const links = ["me", "cv", "posts", "books", "gallery"];

  return (
    <div className={styles.container}>
      {links.map((link) => {
        return (
          <a href={`/${link}`} className={styles.link}>
            [{link}]
          </a>
        );
      })}
    </div>
  );
}

import styles from "./Navbar.module.scss";

export default function NavBar() {
  const links = ["me", "cv", "posts", "books", "gallery"];

  return (
    <div className={styles.container}>
      {links.map((link) => {
        return (
          <div className={styles.link}>
            <a href={`/${link}`}>[{link}]</a>
          </div>
        );
      })}
    </div>
  );
}

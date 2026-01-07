import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <a
        href={`https://www.linkedin.com/in/victoria-li-70a31b1b2/`}
        className={styles.link}
        target="_blank"
      >
        [linkedin]
      </a>
      <a
        href={`https://github.com/turtlemooncake`}
        className={styles.link}
        target="_blank"
      >
        [github]
      </a>
    </div>
  );
}

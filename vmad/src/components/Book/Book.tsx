import clsx from "clsx";
import type { BookData } from "../../util/bookshelf";
import ScrambleHover from "../ui/scramble-hover";
import styles from "./Book.module.scss";

interface BookProps {
  book: BookData;
}
export default function Book(props: BookProps) {
  const { book } = props;
  const titleLength = book.title.length;

  return (
    <div className={styles.book}>
      <img src={book.cover} className={styles.cover}></img>
      <div className={styles.descriptionContainer}>
        <ScrambleHover
          text={book.title}
          scrambleSpeed={50}
          maxIterations={8}
          sequential={true}
          revealDirection="start"
          className={clsx(
            styles.title,
            titleLength > 15 && styles.smallerTitle,
          )}
        />
        <p className={styles.author}>{book.author}</p>
        <p className={styles.blurb}>{book.blurb}</p>
      </div>
    </div>
  );
}

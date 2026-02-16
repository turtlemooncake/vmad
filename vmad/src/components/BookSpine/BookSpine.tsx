import styles from "./BookSpine.module.scss";
import type { Book } from "../../util/bookshelf";

interface BookSpineProps {
  book: Book;
  width: number;
  height: number;
  rotation: number;
}

export default function BookSpine(props: BookSpineProps) {
  return (
    <div
      className={styles.bookspine}
      style={
        {
          width: `${props.width}px`,
          height: `${props.height}px`,
          "--rotation": `${props.rotation}deg`,
        } as React.CSSProperties
      }
    >
      <img src={props.book.cover} />
    </div>
  );
}

import styles from "./BookSpine.module.scss";
import { type BookData } from "../../util/bookshelf";
import clsx from "clsx";

interface BookSpineProps {
  book: BookData;
  width: number;
  height: number;
  rotation: number;
  onClick: () => void;
  selectedBook: BookData | null;
}

export default function BookSpine(props: BookSpineProps) {
  const isThisBook =
    props.selectedBook && props.selectedBook.title === props.book.title;
  return (
    <div
      className={clsx(styles.bookspine, isThisBook && styles.active)}
      style={
        {
          width: `${props.width}px`,
          height: `${props.height}px`,
          "--rotation": `${props.rotation}deg`,
        } as React.CSSProperties
      }
      onClick={props.onClick}
    >
      <img src={props.book.cover} />
    </div>
  );
}

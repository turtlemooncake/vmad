import styles from "./BookSpine.module.scss";
import type { Book } from "../../util/bookshelf";

interface BookSpineProps {
  book: Book;
  width: number;
  height: number;
  rotation: number;
}

export default function BookSpine(props: BookSpineProps) {
  // Use state if you want height/rotation to be stable per book
  // const [stableHeight] = useState(props.height);
  // const [stableRotation] = useState(props.rotation);

  return (
    <div
      className={styles.bookspine}
      style={{
        width: `${props.width}px`,
        height: `${props.height}px`,
        transform: `rotate(${props.rotation}deg)`,
      }}
    >
      <img src={props.book.cover} width={50} height={80} />
    </div>
  );
}

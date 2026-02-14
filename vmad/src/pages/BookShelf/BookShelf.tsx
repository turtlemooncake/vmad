import BookSpine from "../../components/BookSpine/BookSpine";
import { books } from "../../util/bookshelf";
import styles from "./BookShelf.module.scss";

export default function BookShelf() {
  console.log(books);
  return (
    <div className={styles.container}>
      <div className={styles.bookshelf}>
        {books.map((book) => {
          return <BookSpine imageUrl={book.cover} />;
        })}
      </div>
    </div>
  );
}

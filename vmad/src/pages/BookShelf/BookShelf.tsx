import { useState } from "react";
import BookSpine from "../../components/BookSpine/BookSpine";
import {
  books,
  getRightEdge,
  getTilt,
  randomHeight,
  toRadians,
  type Book,
} from "../../util/bookshelf";
import styles from "./BookShelf.module.scss";
import gapple from "@/assets/bookshelf/mc-gapple-1.png";
import enderEye from "@/assets/bookshelf/mc-ender-eye-blink.gif";

export default function BookShelf() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  // Precompute stable heights + tilts
  const [bookSpines] = useState(() => {
    const width = 30 + Math.random() * 2; // fixed book width
    let x = 0; // track horizontal placement
    const result: Array<{
      book: Book;
      height: number;
      rotation: number;
      x: number;
      width: number;
    }> = [];

    books.forEach((book, i) => {
      let height = randomHeight(80, 120);
      let rotation = getTilt(i, books.length, 3);

      // Check collision with previous book
      if (i > 0) {
        const prev = result[i - 1];
        const prevRight = getRightEdge(
          prev.x,
          prev.width,
          prev.rotation,
          prev.height,
        );

        const currentLeft = x;

        if (prevRight > currentLeft && rotation !== 0) {
          const radians = toRadians(rotation);
          const tan = Math.tan(radians);

          if (tan !== 0) {
            // Solve for height where no overlap occurs
            const allowedHeight = (currentLeft - (prev.x + prev.width)) / tan;

            height = Math.min(height, Math.abs(allowedHeight));
          } else {
            rotation = 0;
          }
        }
      }

      result.push({ book, height, rotation, x, width });
      x += width + 10; // move x forward for next book + _px gap
    });
    return result;
  });

  return (
    <div className={styles.container}>
      <div className={styles.bookshelf}>
        {bookSpines.map((book, idx) => {
          return (
            <>
              {idx === 0 && (
                <img src={enderEye} className={styles.bookstart}></img>
              )}
              <BookSpine
                book={book.book}
                width={book.width}
                height={book.height}
                rotation={book.rotation}
              />
              {idx === bookSpines.length - 1 && (
                <img src={gapple} className={styles.bookend}></img>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

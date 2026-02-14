export interface Book {
  title: string;
  author: string;
  cover: string;
}

// get the book cover images
const bookModules = import.meta.glob<Book>("/src/books/*.mdx", {
  eager: true,
  import: "meta",
});

export const books = Object.values(bookModules);

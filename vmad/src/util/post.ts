// The 'posts' database
export const postMdLoader = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
});

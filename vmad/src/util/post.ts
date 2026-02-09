// The 'posts' database
export const docModules = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

// export const getAllDocs = () => {
//   return Object.entries(docModules).map(([path, raw]: [string, any]) => {
//     const { data, content } = matter(raw);
//     const slug = path.split("/").pop()?.replace(".md", "");
//     return {
//       slug,
//       data,
//       content,
//     };
//   });
// };

// The 'posts' database
export const docModules = import.meta.glob("../posts/*.mdx", {
  eager: true,
});

export const allDocs = Object.entries(docModules)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .map(([path, mod]: any) => {
    return {
      slug: path.split("/").pop().replace(".mdx", ""),
      meta: mod.meta,
      Component: mod.default,
    };
  })
  .sort(
    (a, b) =>
      new Date(b.meta["date"]).getTime() - new Date(a.meta["date"]).getTime(),
  );

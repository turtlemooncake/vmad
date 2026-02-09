declare module "*.mdx" {
  import { ComponentType } from "react";

  const MDXComponent: ComponentType<unknown>;
  export default MDXComponent;

  export const meta: Record<string, unknown>;
}

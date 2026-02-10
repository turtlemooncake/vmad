import { Link, useParams } from "react-router-dom";
import clsx from "clsx";
import styles from "./Post.module.scss";
import { allDocs } from "../../util/post";

export default function Post() {
  const { slug } = useParams();
  if (!slug) return;

  const post = allDocs.find((doc) => doc.slug === slug);
  if (!post) return;

  const Component = post.Component;

  return (
    <div className={clsx(styles.content)}>
      <Link to={".."} relative="path" className={styles.back}></Link>
      <Component />
    </div>
  );
}

import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { getAllDocs } from "../../util/post";
import clsx from "clsx";
import styles from "./Post.module.scss";

export default function Post() {
  const { slug } = useParams();
  if (!slug) return;

  const post = getAllDocs();
  console.log(post);

  return (
    <div className={clsx(styles.content)}>
      {/* <ReactMarkdown>{}</ReactMarkdown> */}
      hi there
    </div>
  );
}

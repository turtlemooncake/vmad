import { Link } from "react-router-dom";
import { allDocs } from "../../util/post";
import styles from "./PostsLanding.module.scss";
import ScrambleHover from "../../components/ui/scramble-hover";

export default function PostsLanding() {
  return (
    <div className={styles.list}>
      <ScrambleHover text={"Posts"} className={styles.title} />
      <ul>
        {allDocs.map((doc, idx) => (
          <li key={idx}>
            <Link to={`/posts/${doc.slug}`}>
              <div className={styles.link}>
                <h4>{doc.meta["title"]}</h4>
                <p>{doc.meta["date"]}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

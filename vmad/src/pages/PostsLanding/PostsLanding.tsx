import { Link } from "react-router-dom";
import { docModules } from "../../util/post";

export default function PostsLanding() {
  const slugs = Object.keys(docModules).map((path) =>
    path.split("/").pop()?.replace(".md", ""),
  );

  console.log(slugs);
  return (
    <div>
      <ul>
        {slugs.map((slug) => (
          <li key={slug}>
            <Link to={`/posts/${slug}`}>{slug}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

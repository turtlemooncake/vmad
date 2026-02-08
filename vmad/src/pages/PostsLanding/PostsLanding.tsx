import { Link } from "react-router-dom";
import { postMdLoader } from "../../util/post";

export default function PostsLanding() {
  const slugs = Object.keys(postMdLoader).map((path) =>
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

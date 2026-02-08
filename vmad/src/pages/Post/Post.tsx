import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { postMdLoader } from "../../util/post";

export default function Post() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  useEffect(() => {
    const loadPost = async () => {
      const path = `../posts/${slug}.md`;
      const file = postMdLoader[path];

      if (file) {
        const raw = await file();
        setContent(raw as string);
      }
    };
    loadPost();
  }, [slug]);

  return (
    <div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

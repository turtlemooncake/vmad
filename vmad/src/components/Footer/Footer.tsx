import { Link, useLocation } from "react-router-dom";
import ScrambleHover from "../ui/scramble-hover";
import styles from "./Footer.module.scss";
import clsx from "clsx";

interface FooterProps {
  className?: string;
}

export default function Footer(props: FooterProps) {
  const location = useLocation();
  // const location = useLocation();
  // const currentPath = location.pathname;
  // const concentratedLayouts = new Set(["/", "/me", "/resume", "/posts"]);
  const currentPath = location.pathname;
  const botFooter = new Set(["/posts"]);
  const forceFooterBottomForMobile = botFooter.has(currentPath);

  const links = [
    {
      name: "[linkedin]",
      url: "https://www.linkedin.com/in/victoria-li-70a31b1b2/",
    },
    {
      name: "[github]",
      url: "https://github.com/turtlemooncake",
    },
    {
      name: "[goodreads]",
      url: "https://www.goodreads.com/user/show/173575958-skytherin",
    },
  ];

  return (
    <div
      className={clsx(
        styles.container,
        forceFooterBottomForMobile && styles.goBottom,
        props.className,
      )}
    >
      {links.map((link, idx) => {
        return (
          <Link to={link.url} className={styles.link} target="_blank" key={idx}>
            <ScrambleHover text={link.name} />
          </Link>
        );
      })}
    </div>
  );
}

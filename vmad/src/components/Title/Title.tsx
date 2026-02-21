import styles from "./Title.module.scss";
import ScrambleHover from "../../components/ui/scramble-hover";

interface TitleProps {
  title?: string;
  subtitle?: string;
}
export default function Title({ title, subtitle }: TitleProps) {
  return (
    <div className={styles.module}>
      {title && <ScrambleHover text={title} className={styles.title} />}
      {subtitle && (
        <ScrambleHover text={subtitle} className={styles.subtitle} />
      )}
    </div>
  );
}

import styles from "./BookSpine.module.scss";

interface BookSpineProps {
  imageUrl: string;
}

export default function BookSpine(props: BookSpineProps) {
  return (
    <div className={styles.bookspine}>
      <img src={props.imageUrl} width={50} height={80} />
    </div>
  );
}

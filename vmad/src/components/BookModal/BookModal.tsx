import { useEffect, useRef } from "react";
import styles from "./BookModal.module.scss";

interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function BookModal({
  isOpen,
  onClose,
  children,
}: BookModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    }

    if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} className={styles.modal} onClose={onClose}>
      test book modal
      {children}
    </dialog>
  );
}

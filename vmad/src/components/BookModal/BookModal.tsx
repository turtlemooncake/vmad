import { useEffect, useRef } from "react";
import styles from "./BookModal.module.scss";

interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
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

    if (isOpen) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [isOpen]);

  function handleClick(e: React.MouseEvent<HTMLDialogElement>) {
    if (e.target === dialogRef.current) {
      onClose();
    }
  }

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      className={styles.modal}
      onClose={onClose}
      onClick={handleClick}
    >
      {children}
    </dialog>
  );
}

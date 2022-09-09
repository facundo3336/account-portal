import { useEffect, useRef, useState } from "react";
import styles from "./Dropdown.module.scss";

interface Props {
  children: React.ReactNode;
  title: string;
}

export const Dropdown = ({ children, title }: Props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocumentClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Element)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", onDocumentClick);

    return () => document.removeEventListener("click", onDocumentClick);
  }, []);

  const onClickActiveArrow = () => {
    setOpen(!open);
  };

  const dropdownTitleStyles =
    styles.dropdownTitleContainer +
    " " +
    (open ? styles["dropdownActive"] : "");

  return (
    <div className={styles.dropdown} ref={ref}>
      <div onClick={onClickActiveArrow} className={dropdownTitleStyles}>
        <span className={styles.dropdownTitle}>{title}</span>
        <div className={styles.dropdownArrow}>
          <span className="material-icons-outlined">expand_more</span>
        </div>
      </div>
      {open && <div className={styles.dropdownContent}>{children}</div>}
    </div>
  );
};

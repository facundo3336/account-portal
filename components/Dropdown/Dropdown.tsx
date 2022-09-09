import { useEffect, useRef, useState } from "react";
import styles from "./Dropdown.module.scss";

export enum TextSize {
  sm = "text-sm",
  md = "text-md",
  lg = "text-lg",
}

interface Props {
  children: React.ReactNode;
  title: string;
  textSize: TextSize;
}

export const Dropdown = ({ children, title, textSize }: Props) => {
  const [dropdown, setDropdownActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocumentClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Element)) {
        setDropdownActive(false);
      }
    };

    document.addEventListener("click", onDocumentClick);

    return () => document.removeEventListener("click", onDocumentClick);
  }, []);

  const onClickActiveArrow = () => {
    setDropdownActive(!dropdown);
  };

  const dropdownTitleStyles =
    styles.dropdownTitleContainer +
    " " +
    (dropdown && styles["dropdownActive"]);

  return (
    <div className={styles.dropdown + " " + styles[textSize]} ref={ref}>
      <div onClick={onClickActiveArrow} className={dropdownTitleStyles}>
        <span className={styles.dropdownTitle}>{title}</span>
        <div className={styles.dropdownArrow}>
          <span className="material-icons-outlined">expand_more</span>
        </div>
      </div>
      {dropdown && <div className={styles.dropdownContent}>{children}</div>}
    </div>
  );
};

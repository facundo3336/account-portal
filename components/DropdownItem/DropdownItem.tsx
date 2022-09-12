import Link from "next/link";
import styles from "./DropdownItem.module.scss";

interface Props {
  type?: "separator";
  children?: React.ReactNode;
  icon?: string;
  onClick: () => void;
}

export const DropdownItem = ({ type, children, icon, onClick }: Props) => {
  if (type === "separator") {
    return <div className={styles.separator}></div>;
  }

  return (
    <div onClick={onClick} className={styles.dropdownItem}>
      {icon !== undefined && (
        <span className={"material-icons-outlined " + styles.dropdownIcon}>
          {icon}
        </span>
      )}
      {children}
    </div>
  );
};

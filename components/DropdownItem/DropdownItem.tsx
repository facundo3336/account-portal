import styles from "./DropdownItem.module.scss";

interface Props {
  type?: "separator";
  children?: React.ReactNode;
  icon?: string;
}

export const DropdownItem = ({ type, children, icon }: Props) => {
  if (type === "separator") {
    return <div className={styles.separator}></div>;
  }

  return (
    <div className={styles.dropdownItem}>
      {icon !== undefined && (
        <span className={"material-icons-outlined " + styles.dropdownIcon}>
          {icon}
        </span>
      )}
      {children}
    </div>
  );
};

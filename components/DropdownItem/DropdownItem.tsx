import styles from "./DropdownItem.module.scss";

interface Props {
  endOfSection: boolean;
  children?: React.ReactNode;
  icon?: string;
}

export const DropdownItem = ({ endOfSection, children, icon }: Props) => {
  const dropdownItemClasses =
    styles["dropdownItem"] +
    " " +
    (endOfSection ? styles["endOfSectionLine"] : "");

  return (
    <div className={dropdownItemClasses}>
      {icon !== undefined && (
        <span className={"material-icons-outlined " + styles.dropdownIcon}>
          {icon}
        </span>
      )}
      {children}
    </div>
  );
};

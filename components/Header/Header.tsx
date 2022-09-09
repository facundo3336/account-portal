import styles from "./Header.module.scss";

interface Props {
  children: React.ReactNode;
  border?: boolean;
}

export const Header = ({ children, border }: Props) => {
  const borderClass = border ? styles["greyBorder"] : "";

  return (
    <header className={styles.header + " " + borderClass}>{children}</header>
  );
};

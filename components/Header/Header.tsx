import styles from "./Header.module.scss";

interface Props {
  children: React.ReactNode;
  border?: boolean;
}

export const Header = ({ children, border }: Props) => {
  const borderClass = border ? "greyBorder" : "";

  return (
    <header className={styles.header + " " + styles[borderClass]}>
      {children}
    </header>
  );
};

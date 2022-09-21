import styles from "./Header.module.scss";

interface Props {
  children: React.ReactNode;
  border?: boolean;
  transparent: boolean;
}

export const Header = ({ children, border, transparent }: Props) => {
  const borderClass = border ? styles["greyBorder"] : "";

  const transparentClass = transparent ? styles["transparent"] : "";

  return (
    <header
      className={styles.header + " " + borderClass + " " + transparentClass}
    >
      {children}
    </header>
  );
};

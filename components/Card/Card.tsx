import styles from "./Card.module.scss";

interface Props {
  children: React.ReactNode;
  size: "sm" | "md" | "lg" | "info" | "tiny";
  padding?: boolean;
}

export const Card = ({ children, size, padding }: Props) => {
  const cardPaddingClass = padding === false ? styles.cardNoPadding : "";

  return (
    <div className={`${styles.card} ${styles[size]} ${cardPaddingClass}`}>
      {children}
    </div>
  );
};

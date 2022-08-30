import styles from "./Card.module.scss";

interface Props {
  children: React.ReactNode;
  size: "sm" | "md" | "lg";
}

export const Card = ({ children, size }: Props) => {
  return <div className={`${styles.card} ${styles[size]}`}>{children}</div>;
};

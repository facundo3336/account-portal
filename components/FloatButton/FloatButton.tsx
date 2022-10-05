import styles from "./FloatButton.module.scss";

interface Props {
  onClick: () => void;
}

export const FloatButton = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.floatButton}>
      <div className={styles.buttonLine}></div>
      <div className={styles.buttonLine}></div>
      <div className={styles.buttonLine}></div>
    </button>
  );
};

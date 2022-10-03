import styles from "./LoadingBar.module.scss";

interface Props {
  percentage: number;
}

export const LoadingBar = ({ percentage }: Props) => {
  return (
    <div className={styles.loadingBarContainer}>
      <div
        className={styles.loadingBar}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

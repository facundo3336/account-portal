import styles from "./Title.module.scss";

interface Props {
  title: string;
  description: string;
  underline: boolean;
}

export const Title = ({ title, description, underline }: Props) => {
  return (
    <div className={styles.titleContainer}>
      <h3 className={underline ? styles.titleUnderline : ""}>{title}</h3>
      <p className={styles.titleDescription}>{description}</p>
    </div>
  );
};

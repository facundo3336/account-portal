import styles from "./Checkbox.module.scss";

interface Props {
  label: string;
}

export const Checkbox = ({ label }: Props) => {
  return (
    <div className={styles.checkBoxContainer}>
      <label>
        <input className={styles.checkBoxInput} type="checkbox" /> {label}
      </label>
    </div>
  );
};

import styles from "./Checkbox.module.scss";

interface Props {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export const Checkbox = ({ label, value, onChange }: Props) => {
  return (
    <div className={styles.checkBoxContainer}>
      <label>
        <input
          onChange={(e) => onChange(e.target.checked)}
          checked={value}
          className={styles.checkBoxInput}
          type="checkbox"
        />{" "}
        {label}
      </label>
    </div>
  );
};

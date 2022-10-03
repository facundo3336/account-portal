import styles from "./Checkbox.module.scss";

interface Props {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
  description?: string;
}

export const Checkbox = ({ label, value, onChange, description }: Props) => {
  return (
    <div className={styles.checkBoxContainer}>
      <label>
        <div className={styles.inputContainer}>
          <input
            onChange={(e) => onChange(e.target.checked)}
            checked={value}
            className={styles.checkBoxInput}
            type="checkbox"
          />{" "}
        </div>
        <div className={styles.checkBoxExtraTextContainer}>
          <span>{label}</span>
          {description && (
            <p className={styles.checkBoxExtraText}>{description}</p>
          )}
        </div>
      </label>
    </div>
  );
};

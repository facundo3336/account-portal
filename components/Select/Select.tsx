import styles from "./Select.module.scss";

interface Props {
  value: string;
  options: {
    value: string;
    text: string;
  }[];
  defaultText: string;
  onChange: (value: string) => void;
}

export const Select = ({ options, defaultText, onChange, value }: Props) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className={styles.select}
      value={value}
    >
      <option value="" disabled>
        {defaultText}
      </option>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        );
      })}
    </select>
  );
};

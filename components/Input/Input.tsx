import Link from "next/link";
import styles from "./Input.module.scss";

interface Props {
  type: "text" | "email" | "password";
  label?: string;
  link?: {
    label: string;
    url: string;
  };
  value: string;
  onChange: (value: string) => void;
  placerholder?: string;
}

export const Input = ({
  type,
  label,
  link,
  value,
  onChange,
  placerholder,
}: Props) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.labelContainer}>
        {label && <label>{label}</label>}
        {link && <Link href={link.url}>{link.label}</Link>}
      </div>
      <input
        placeholder={placerholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className={styles.input}
        type={type}
      />
    </div>
  );
};

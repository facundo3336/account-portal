import Link from "next/link";
import styles from "./Input.module.scss";

interface Props {
  type: string;
  labelText: string | undefined;
  isPasswordInput: boolean;
}

export const Input = ({ type, labelText, isPasswordInput }: Props) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.labelContainer}>
        {labelText && <label>{labelText}</label>}
        {isPasswordInput && (
          <Link href="#">
            <a>Forgot your password?</a>
          </Link>
        )}
      </div>
      <input className={styles.input} type={type} />
    </div>
  );
};

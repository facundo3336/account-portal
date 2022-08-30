import styles from "./Button.module.scss";

interface Props {
  children: React.ReactNode;
  color: string;
  onClick: () => void;
}

export const Button = ({ children, color, onClick }: Props) => {
  const classNames = [styles.button, styles[color]].join(" ");

  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
};

import styles from "./Button.module.scss";

export enum ButtonColor {
  Primary = "primary",
  PrimaryLight = "primary-light",
  PrimaryDark = "primary-dark",
  Secondary = "secondary",
  SecondaryLight = "secondary-light",
  SecondaryDark = "secondary-dark",
}

interface Props {
  children: React.ReactNode;
  color: ButtonColor;
  onClick: () => void;
  disabled?: boolean;
}

export const Button = ({ children, color, onClick, disabled }: Props) => {
  const classNames = [styles.button, styles[color]].join(" ");

  return (
    <button disabled={disabled} onClick={onClick} className={classNames}>
      {children}
    </button>
  );
};

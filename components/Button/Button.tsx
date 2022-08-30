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
}

export const Button = ({ children, color, onClick }: Props) => {
  const classNames = [styles.button, styles[color]].join(" ");

  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
};

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
  disable?: boolean;
}

export const Button = ({ children, color, onClick, disable }: Props) => {
  const classNames = [styles.button, styles[color]].join(" ");

  return (
    <button disabled={disable} onClick={onClick} className={classNames}>
      {children}
    </button>
  );
};

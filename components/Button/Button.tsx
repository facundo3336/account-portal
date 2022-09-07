import styles from "./Button.module.scss";

export enum ButtonColor {
  Primary = "primary",
  Primary400 = "primary-400",
  PrimaryWhite = "primary-white",
  Primary900 = "primary-900",
  Primary50 = "primary-50",
  Secondary = "secondary",
  Secondary200 = "secondary-200",
  Secondary700 = "secondary-700",
  Default = "default",
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

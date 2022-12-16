import React from "react";
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
  Grey = "grey",
  White = "white",
  Link = "link",
}

interface Props {
  children: React.ReactNode;
  color: ButtonColor;
  onClick: (e: React.MouseEvent) => void;
  disabled?: boolean;
  textSize?: "sm" | "md" | "lg";
}

export const Button = ({
  children,
  color,
  onClick,
  disabled,
  textSize,
}: Props) => {
  const textSizeClass = textSize !== undefined ? styles[textSize] : "";
  const classNames = [styles.button, styles[color], textSizeClass].join(" ");

  return (
    <button disabled={disabled} onClick={onClick} className={classNames}>
      {children}
    </button>
  );
};

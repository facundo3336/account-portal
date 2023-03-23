import { useEffect, useRef, useState } from "react";
import styles from "./NavigationButton.module.scss";

interface Props {
  children: React.ReactNode;
  onClick: (index: number) => void;
  index: number;
  indexActive?: number;
}

export const NavigationButton = ({
  children,
  onClick,
  index,
  indexActive,
}: Props) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (index === indexActive) {
      setIsActive(true);
      return;
    }

    setIsActive(false);
  }, [indexActive, index]);

  const activeClass = isActive ? styles["buttonActive"] : "";

  return (
    <button
      onClick={() => onClick(index)}
      className={styles.NavButton + " " + activeClass}
    >
      {children}
    </button>
  );
};

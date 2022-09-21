import { useState } from "react";
import { NavigationButton } from "../NavigationButton/NavigationButton";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  const [indexActive, setIndexActive] = useState<number | undefined>();
  const onClickActive = (index: number) => {
    setIndexActive(index);
  };

  return (
    <nav className={styles.navigation}>
      <NavigationButton
        onClick={(index) => onClickActive(index)}
        indexActive={indexActive}
        index={0}
      >
        Holas
      </NavigationButton>
      <NavigationButton
        indexActive={indexActive}
        index={1}
        onClick={(index) => onClickActive(index)}
      >
        Holitas
      </NavigationButton>
      <NavigationButton
        indexActive={indexActive}
        index={2}
        onClick={(index) => onClickActive(index)}
      >
        Holitas
      </NavigationButton>
      <NavigationButton
        indexActive={indexActive}
        index={3}
        onClick={(index) => onClickActive(index)}
      >
        Holitas
      </NavigationButton>
    </nav>
  );
};

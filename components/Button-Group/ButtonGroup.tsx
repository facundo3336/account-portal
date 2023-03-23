import styles from "./ButtonGroup.module.scss";
import clsx from "clsx";

interface Props {
  items: {
    value: string;
    label: string;
  }[];
  value: string;
  onClick: (value: string) => void;
}

export const ButtonGroup = ({ items, value, onClick }: Props) => {
  return (
    <div className={styles.buttonsGroup}>
      {items.map((item) => {
        const classNames = clsx(styles.buttonsGroupButton, {
          [styles.selected]: true,
        });
        return (
          <button
            onClick={() => onClick(item.value)}
            className={classNames}
            key={item.value}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

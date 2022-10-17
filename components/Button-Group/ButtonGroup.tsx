import styles from "./ButtonGroup.module.scss";

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
        return (
          <button
            onClick={() => onClick(item.value)}
            aria-selected={value === item.value}
            className={styles.buttonsGroupButton}
            key={item.value}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

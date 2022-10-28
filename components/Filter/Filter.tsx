import { useState } from "react";
import { FilterProps } from "../../types";
import styles from "./Filter.module.scss";

interface Props {
  filter: FilterProps;
  type: "button" | "large";
}

export const Filter = ({ filter, type }: Props) => {
  const [options, setOptions] = useState(false);

  const optionClass = options ? "" : styles["optionsNone"];

  const onClickOptions = () => {
    setOptions(!options);
  };

  const onItemClick = (itemValue: string) => {
    if (!filter.multiple) {
      filter.onChange(itemValue);
      return;
    }

    if (filter.value.includes(itemValue)) {
      const newValue = (filter.value as string[]).filter((v) => {
        return v !== itemValue;
      });

      filter.onChange(newValue);
    } else {
      const newValue = [...(filter.value as string[]), itemValue];

      filter.onChange(newValue);
    }
  };

  return (
    <div
      className={
        type === "button" ? styles.filterTypeButton : styles.filterTypeLarge
      }
    >
      <button onClick={onClickOptions} className={styles.filterButton}>
        <span className={styles.filterName}>{filter.filterName}</span>
        <span className="material-icons-outlined">arrow_drop_down</span>
      </button>
      <div className={styles.filterOptionsContainer}>
        {filter.items.map((item) => {
          let checkedValue = item.id === filter.value;
          if (filter.multiple) {
            checkedValue = filter.value.includes(item.id);
          }

          return (
            <div className={styles.filterInput + " " + optionClass}>
              <label>
                <input
                  checked={checkedValue}
                  onChange={() => onItemClick(item.id)}
                  type="checkbox"
                />
                {item.label}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

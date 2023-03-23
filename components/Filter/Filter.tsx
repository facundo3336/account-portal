import { useState } from "react";
import { Checkbox } from "../Checkbox/CheckBox";
import styles from "./Filter.module.scss";

interface Props {
  filterName: string;
  multiple: boolean;
  items: {
    id: string;
    label: string;
  }[];
  value: string | string[];
  onChange: (value: string | string[]) => void;
}

export const Filter = ({
  multiple,
  items,
  value,
  onChange,
  filterName,
}: Props) => {
  const [options, setOptions] = useState(false);

  const optionClass = options ? "" : styles["optionsNone"];

  const onClickOptions = () => {
    setOptions(!options);
  };

  const onItemClick = (itemValue: string) => {
    if (!multiple) {
      onChange(itemValue);
      return;
    }

    if (value.includes(itemValue)) {
      const newValue = (value as string[]).filter((v) => {
        return v !== itemValue;
      });

      onChange(newValue);
    } else {
      const newValue = [...(value as string[]), itemValue];

      onChange(newValue);
    }
  };

  return (
    <div className={styles.filterContainer}>
      <button onClick={onClickOptions} className={styles.filterButton}>
        {filterName}
        <span className="material-icons-outlined">arrow_drop_down</span>
      </button>
      <div className={styles.filterOptionsContainer}>
        {items.map((item) => {
          let checkedValue = item.id === value;
          if (multiple) {
            checkedValue = value.includes(item.id);
          }

          return (
            <div
              key={item.id}
              className={styles.filterInput + " " + optionClass}
            >
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

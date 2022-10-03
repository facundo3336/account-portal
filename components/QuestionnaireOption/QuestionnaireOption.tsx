import { useEffect, useState } from "react";
import { Checkbox } from "../Checkbox/CheckBox";
import styles from "./QuestionnaireOption.module.scss";

interface Props {
  option: {
    title: string;
    extraText?: string;
  };
  onClickSelected: (index: number) => void;
  index: number;
  selectedIndex: number;
}

export const QuestionnaireOption = ({
  option,
  index,
  onClickSelected,
  selectedIndex,
}: Props) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (selectedIndex === index) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selectedIndex]);

  return (
    <div
      className={styles.questionnaireOption}
      onClick={() => onClickSelected(index)}
    >
      <Checkbox
        extraText={option.extraText}
        label={option.title}
        value={isSelected}
        onChange={() => setIsSelected}
      />
    </div>
  );
};

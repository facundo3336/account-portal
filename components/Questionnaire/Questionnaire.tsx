import { useEffect, useState } from "react";
import { QuestionnaireData } from "../../types";
import { QuestionnaireOption } from "../QuestionnaireOption/QuestionnaireOption";
import styles from "./Questionnaire.module.scss";

interface Props {
  questionnarieData: QuestionnaireData;
}

export const Questionnaire = ({ questionnarieData }: Props) => {
  const [questionnaire, setQuestionnaire] =
    useState<QuestionnaireData>(questionnarieData);

  const [indexSelected, setIndexSelected] = useState<number>(0);

  useEffect(() => {
    setQuestionnaire(questionnarieData);
  }, [questionnarieData]);

  const onClickSelected = (index: number) => {
    setIndexSelected(index);
  };

  return (
    <div className={styles.questionnaireContainer}>
      <h1>{questionnaire.question}</h1>
      <p className={styles.questionnaireExtraText}>
        {questionnaire.description}
      </p>
      <div className={styles.questionnarieOptions}>
        {questionnaire.options.map((option) => {
          return (
            <QuestionnaireOption
              selectedIndex={indexSelected}
              key={questionnaire.options.indexOf(option) + 1}
              index={questionnaire.options.indexOf(option) + 1}
              option={{ title: option.title, description: option.description }}
              onClickSelected={onClickSelected}
            />
          );
        })}
      </div>
    </div>
  );
};

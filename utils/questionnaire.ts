import { QuestionnaireData } from "../types";

export const perecentageCompleted = (
  position: number,
  questionnaire: QuestionnaireData[]
) => {
  let optionsCount = 0;
  let actualPostionCount = 0;

  for (let i = 0; i < questionnaire.length; i++) {
    optionsCount += questionnaire[i].options.length;

    if (i < position) {
      actualPostionCount += questionnaire[i].options.length;
    }
  }

  return (actualPostionCount * 100) / optionsCount;
};

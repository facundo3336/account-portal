import { QuestionnaireData } from "../types";

export const perecentageCompleted = (
  position: number,
  questionnaire: QuestionnaireData[]
) => {
  let optionsCount = 0;
  let currentPositionCount = 0;

  for (let i = 0; i < questionnaire.length; i++) {
    optionsCount += questionnaire[i].options.length;

    if (i < position) {
      currentPositionCount += questionnaire[i].options.length;
    }
  }

  return (currentPositionCount * 100) / optionsCount;
};
